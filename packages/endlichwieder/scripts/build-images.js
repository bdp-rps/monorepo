const fs = require('fs')

const images = {}

const groups = fs
  .readdirSync('./public/groups')
  .filter(file => !file.startsWith('.'))

groups.forEach(group => {
  images[group] = fs
    .readdirSync('./public/groups/' + group)
    .filter(file => !file.startsWith('.'))
})

fs.writeFile('./data/images.json', JSON.stringify(images, null, 2), err => {
  if (err) {
    console.error('Something went wrong.')
    return
  }

  console.log('Wrote images.json file!')
})
