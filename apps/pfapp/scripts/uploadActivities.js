const postActivitySlots = require('../api/postActivitySlots')
const postActivity = require('../api/postActivity')

const ACTIVITIES = [
  {
    title: 'Textilien bemalen',
    description:
      'Nach einer kurzen Einstimmung mit Geschichten aus dem Dschungelbuch gestalten die Kinder Textilien kreativ mit Tiermotiven.',
    uploadedBy: 'Landesrudel',
    groupType: 'WOLF',
    materials: [
      'Dschungelbuch',
      'Beutel',
      'T-Shirts',
      'Textilstifte',
      'Textilfarben',
      'Kittel',
      'Unterlage',
      'Schablonen',
    ],
    preperation: 20,
    timeSlots: [
      {
        title: 'Ankommen',
        description: 'Kinder kommen an und organisieren sich.',
      },
      {
        title: 'Geschichte vorlesen',
        description: 'Vorlesen einer Geschichte aus dem Dschungelbuch.',
      },
      {
        title: 'Gesprächsrunde',
        description:
          'Welche Tiere sind euch in Erinnerung geblieben? Was war euer Lieblingstier?',
      },
      {
        title: 'Textilien bemalen',
        description:
          'Mit Textilfarben und Schablonen gestalten die Kinder Beutel oder T-Shirts mit Tiermotiven.',
      },
      {
        title: 'Abschluss und Reflexion',
        description: 'Rückblick und Abschluss der Stunde.',
      },
    ],
  },
]

async function createTimeSlot(timeSlot) {
  try {
    const response = await postActivitySlots({
      title: timeSlot.title,
      description: timeSlot.description,
    })
    const data = await response.json()
    return data.data.id
  } catch (error) {
    console.error('Error creating time slot:', error.message)
    if (error.response) {
      console.error('Response data:', error.response.data)
      console.error('Response status:', error.response.status)
    }
    throw error
  }
}

// Helper function to create a delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// Helper function to retry an operation
async function retry(operation, maxRetries = 3, delayMs = 2000) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await operation()
    } catch (error) {
      if (i === maxRetries - 1) throw error
      console.log(`Attempt ${i + 1} failed, retrying in ${delayMs}ms...`)
      await delay(delayMs)
    }
  }
}

async function createActivity(activity) {
  try {
    console.log(`Creating activity: ${activity.title}`)

    // First create all time slots
    console.log('Creating time slots...')
    const timeSlotPromises = activity.timeSlots.map(createTimeSlot)
    const timeSlotIds = await Promise.all(timeSlotPromises)
    console.log('Time slots created:', timeSlotIds)

    // Then create the activity with the time slot IDs
    console.log('Creating activity with time slots...')
    const activityData = {
      title: activity.title,
      description: activity.description,
      uploadedBy: activity.uploadedBy,
      groupType: activity.groupType,
      materials: activity.materials.join(', '),
      preperation: activity.preperation,
      activity_slots: timeSlotIds,
    }
    console.log('Activity data:', JSON.stringify(activityData, null, 2))

    // Use retry logic for the activity creation
    const response = await retry(() => postActivity(activityData))
    const data = await response.json()
    console.log(`Successfully created activity: ${activity.title}`, data)
    return data
  } catch (error) {
    console.error(`Error creating activity ${activity.title}:`, error.message)
    if (error.response) {
      console.error('Response data:', error.response.data)
      console.error('Response status:', error.response.status)
    }
    throw error
  }
}

async function uploadActivities() {
  console.log('Starting activity upload...')

  try {
    for (const activity of ACTIVITIES) {
      console.log('\nProcessing activity:', activity.title)
      await createActivity(activity)
      // Add a 2 second delay between activities
      console.log('Waiting 2 seconds before next activity...')
      await delay(2000)
    }
    console.log('\nAll activities uploaded successfully!')
  } catch (error) {
    console.error('Failed to upload activities:', error.message)
    process.exit(1)
  }
}

// Run the script
uploadActivities()
