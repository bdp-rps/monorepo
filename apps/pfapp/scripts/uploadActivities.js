const postActivitySlots = require('../api/postActivitySlots')
const postActivity = require('../api/postActivity')

const ACTIVITIES = [
  {
    title: 'Dschungelbuch – Masken basteln und Tier-Spiele',
    description:
      'Eine kreative Gruppenstunde mit Tiermasken basteln, Liedern, Vorlesen und Bewegungsspielen – alles inspiriert vom Dschungelbuch.',
    uploadedBy: 'Landesrudel',
    groupType: 'WOLF',
    location: 'INSIDE',
    size: 'MEDIUM',
    season: 'SPRING',
    preperation: 30,
    materials: [
      'Gitarre',
      'Liederbuch',
      'Pappteller',
      'Schere',
      'Acrylfarben',
      'Gummibänder',
      'Pinsel',
      'Malkittel',
      'Unterlage',
      'Kekse',
      'Dschungelbuch',
    ],
    timeSlots: [
      {
        title: 'Anfangskreis & Lied',
        description:
          "Einstieg mit dem Lied 'Probier's mal mit Gemütlichkeit' und Begrüßung.",
      },
      {
        title: 'Bewegungsspiel',
        description:
          'Abgewandelte Version von Fee, Riese, Zwerg – mit Dschungelcharakteren Balu, Baghira, Shir Kahn.',
      },
      {
        title: 'Masken basteln',
        description:
          'Tiermasken aus dem Dschungelbuch werden aus Papptellern gestaltet.',
      },
      {
        title: 'Zwischendurch',
        description: 'Singen, Kekse essen und Vorlesen aus dem Dschungelbuch.',
      },
      {
        title: 'Abschlussspiel',
        description:
          'Feuer, Wasser, Blitz in Dschungelbuch-Version: Feuer, Menschen, Gewitter.',
      },
      {
        title: 'Abschlusskreis',
        description:
          "Reflexion mit der Methode 'Liebe Meute, was war heute unsere Beute?'.",
      },
    ],
  },
  {
    title: 'Dschungel-Spielgeschichte: Shir Khans Angriff',
    description:
      'Abenteuerliche Spielgeschichte, bei der die Wölflinge Feuer gegen Menschen verteidigen und zu Akela bringen müssen.',
    uploadedBy: 'Landesrudel',
    groupType: 'WOLF',
    location: 'OUTSIDE',
    size: 'MEDIUM',
    season: 'SUMMER',
    preperation: 20,
    materials: ['Kostüm Akela', 'Papierflammen', 'Masken aus Gruppenstunde 1'],
    timeSlots: [
      {
        title: 'Ankommen',
        description: 'Begrüßung und erste Orientierung.',
      },
      {
        title: 'Spielgeschichte beginnt',
        description:
          'Akela berichtet von Shir Khans Angriff. Die Wölflinge müssen Feuer (Papierflammen) im Gelände sammeln und zum Ratsfelsen bringen.',
      },
      {
        title: 'Spielverlauf',
        description:
          "Papierflammen einsammeln und bei Begegnung mit 'Menschen' Schnick-Schnack-Schnuck spielen, um das Feuer zu verteidigen.",
      },
      {
        title: 'Abschlusskreis',
        description: 'Reflexion und gemeinsamer Abschluss mit Musik.',
      },
    ],
  },
  {
    title: 'Dschungelbuch-Tiere und kreative Textilgestaltung',
    description:
      'Eine kreative Gruppenstunde mit einer Dschungelbuch-Geschichte, Austausch über Lieblingstiere und dem Bemalen von Textilien.',
    uploadedBy: 'Landesrudel',
    groupType: 'WOLF',
    location: 'INSIDE',
    size: 'SMALL',
    season: 'SPRING',
    preperation: 25,
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
    timeSlots: [
      {
        title: 'Ankommen & Organisation',
        description: 'Begrüßung der Wölflinge und Einstieg.',
      },
      {
        title: 'Geschichte vorlesen',
        description: 'Eine Szene aus dem Dschungelbuch wird vorgelesen.',
      },
      {
        title: 'Tierreflexion',
        description:
          'Gespräch: Welche Tiere sind in Erinnerung geblieben? Welches Tier war das Lieblingswesen?',
      },
      {
        title: 'Textilien bemalen',
        description:
          'Mit Textilfarben und Schablonen gestalten die Kinder Beutel oder T-Shirts.',
      },
      {
        title: 'Abschluss & Reflexion',
        description:
          'Abschlussgespräch mit Blick auf Erlebtes und Gestaltetes.',
      },
    ],
  },
  {
    title: 'Meutenstunde Sternenretter Truppe – Frühling',
    description:
      'Eine frühlingshafte Meutenstunde mit Singen, Spielen und kreativem Kartoffeldruck auf Jutebeuteln.',
    uploadedBy: 'Landesrudel',
    groupType: 'WOLF',
    location: 'INSIDE',
    size: 'SMALL',
    season: 'SPRING',
    preperation: 30,
    materials: [
      'Gitarre',
      'Liederbücher',
      'Farbe',
      'Kartoffeln',
      'Messer',
      'Korken',
      'Jutebeutel',
      'Pinsel',
    ],
    timeSlots: [
      {
        title: 'Begrüßung & Singen',
        description: 'Musikalischer Einstieg mit Liedern.',
      },
      {
        title: 'Spiele',
        description: 'Gemeinsames Spielen.',
      },
      {
        title: 'Vorbereitung Basteln',
        description:
          'Kartoffeln schnitzen, Farben und Materialien vorbereiten.',
      },
      {
        title: 'Basteln',
        description:
          'Stempeln auf Jutebeuteln mit Kartoffel- und Korkstempeln.',
      },
      {
        title: 'Aufräumen & Reflexion',
        description: 'Abschlussbesprechung und gemeinsames Aufräumen.',
      },
      {
        title: 'Abschlusskreis',
        description: 'Abschluss mit kurzer Runde.',
      },
    ],
  },
  {
    title: 'Meutenstunde Lobby Crew – Hotel',
    description:
      'Eine spielerische Meutenstunde zum Thema Hotel mit Bewegungsspielen, einem Geländespiel, kreativer Gestaltung und Cocktails.',
    uploadedBy: 'Landesrudel',
    groupType: 'WOLF',
    location: 'OUTSIDE',
    size: 'MEDIUM',
    season: 'SUMMER',
    preperation: 30,
    materials: [
      'Liederbücher',
      'Gitarre',
      'Tablett',
      'Becher',
      'Stoppuhr',
      'Pappbecher',
      'Cocktailzutaten',
      'Eiswürfel',
    ],
    timeSlots: [
      {
        title: 'Begrüßung',
        description: 'Einführung und Anfangslied.',
      },
      {
        title: 'Kellnerspiel',
        description: 'Staffelspiel mit Tablett und Bechern im Parcours.',
      },
      {
        title: 'Geländespiel',
        description:
          'Pappbecher suchen und durch Spiele verteidigen (inkl. Saboteuren).',
      },
      {
        title: 'Cocktailstation',
        description:
          'Becher kreativ gestalten, alkoholfreie Cocktails mixen und trinken.',
      },
      {
        title: 'Feedback & Abschluss',
        description: 'Reflexion und Verabschiedung.',
      },
    ],
  },
  {
    title: 'Meutenstunde Hui Buh – Universum',
    description:
      'Eine thematische Meutenstunde rund um das Universum mit Spielen, Bastelaktivität zu Planeten, Musik und gemeinsamer Reflexion.',
    uploadedBy: 'Landesrudel',
    groupType: 'WOLF',
    location: 'INSIDE',
    size: 'MEDIUM',
    season: 'WINTER',
    preperation: 45,
    materials: [
      'Styroporkugeln',
      'Schnur',
      'Heißkleber',
      'Acrylfarbe',
      'Draht',
      'Unterlagen',
      'Liederbücher',
      'Gitarre',
    ],
    timeSlots: [
      {
        title: 'Begrüßung',
        description: 'Einleitung ins Thema Universum.',
      },
      {
        title: 'Spiele',
        description:
          'Sternschnuppe, Raketenstart, Sternhagel und weitere Weltraumspiele.',
      },
      {
        title: 'Basteln',
        description:
          'Gestaltung von Planeten aus Styroporkugeln mit Farbe und Draht.',
      },
      {
        title: 'Musik',
        description:
          "Gemeinsames Singen der Lieder 'Astronautin Erika Klose' und 'Milchstraße'.",
      },
      {
        title: 'Reflexion & Abschluss',
        description: 'Reflexionsrunde und Abschluss mit dem Wolfskanon.',
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
    const { data } = await response.json()
    return data.id
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
async function retry(operation, maxRetries = 1, delayMs = 2000) {
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

    // Create materials if they exist
    let material = activity.materials.map((material) => ({ name: material }))

    // Then create the activity with the time slot IDs and material IDs
    console.log('Creating activity with time slots and materials...')
    const activityData = {
      title: activity.title,
      description: activity.description,
      uploadedBy: activity.uploadedBy,
      groupType: activity.groupType,
      material,
      preperation: activity.preperation,
      activity_slots: timeSlotIds,
      size: activity.size,
      season: activity.season,
      location: activity.location,
      attachment: null,
    }

    console.log('Activity data:', activityData)

    // Use retry logic for the activity creation
    const response = await postActivity(activityData)

    console.log(`Successfully created activity: ${activity.title}`, response)
    return response
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
