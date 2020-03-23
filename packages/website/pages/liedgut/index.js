// import React, { useState, useEffect } from 'react'
// import { PDFViewer, Document } from '@react-pdf/renderer'

// import FelaProvider from '../styling/FelaProvider'
// import Song from '../templates/Song'
// import '../utils/init'

// const songs = [
//   'Moselfahrt',
//   'Die Tippelei',
//   'Abends',
//   'Abends treten Elche',
//   'Die Sandbank',
//   'Am Ural',
//   'Kanadischer Herbst',
//   'Das Wochenlied',
//   'Andre, die das Land',
//   'Nicht nur nebenbei',
//   'Auf vielen Straßen',
//   'Fiddlers Green',
//   'Freundschaft',
//   'Hoch im Norden',
//   'Winterlied',
//   'An Land',
//   'In die Sonne',
//   'Die Weber',
//   'Die Ballade vom roten Haar',
//   'Molly Malone',
//   'Sturm und Drang',
//   'Joerg von Frundsberg',
//   'Piratenlied',
//   'Nehmt Abschied Brueder',
//   'Ziehharmonika',
//   'Nordwaerts',
// ]

// const defaultSong = {
//   title: 'Song',
//   beat: '4/4',
//   tempo: 60,
//   words: [{ name: 'Max Mustermann' }],
//   tune: [{ name: 'Max Mustermann' }],
//   content: '',
// }

// const useDebounce = (value, delay = 500) => {
//   let [debouncedValue, setDebouncedValue] = useState(value)

//   useEffect(() => {
//     let handler = window.setTimeout(() => setDebouncedValue(value), delay)

//     return () => window.clearTimeout(handler)
//   }, [value])

//   return debouncedValue
// }

// const Editor = () => {
//   const [selectedSong, selectSong] = useState('')
//   const [song, setSong] = useState(defaultSong)
//   const reference = useDebounce(JSON.stringify(song), 300)

//   const [didMount, setDidMount] = useState(false)

//   useEffect(() => setDidMount(true), [])

//   useEffect(() => {
//     if (selectedSong) {
//       setSong(require('../songs/' + selectedSong).default)
//     } else {
//       setSong(defaultSong)
//     }
//   }, [selectedSong])

//   return (
//     <div style={{ flex: 1, height: '100%' }}>
//       <div style={{ flexDirection: 'row', flex: 1 }}>
//         <div style={{ flex: 1 }}>
//           <select
//             value={selectedSong}
//             onChange={e => selectSong(e.target.value)}>
//             <option value="" />
//             {songs.map(s => (
//               <option value={s}>{s}</option>
//             ))}
//           </select>
//           <textarea
//             style={{ flex: 1, fontSize: 16 }}
//             value={song.content}
//             onChange={e => setSong({ ...song, content: e.target.value })}
//           />
//           <div>
//             <label>Title</label>
//             <input
//               value={song.title}
//               onChange={e => setSong({ ...song, title: e.target.value })}
//             />
//             <label>Tempo</label>
//             <input
//               type="number"
//               value={song.tempo}
//               onChange={e => setSong({ ...song, tempo: e.target.value })}
//             />
//             <label>Takt</label>
//             <select
//               value={song.beat}
//               onChange={e => setSong({ ...song, beat: e.target.value })}>
//               <option value="2/4">2/4</option>
//               <option value="3/4">3/4</option>
//               <option value="4/4">4/4</option>
//               <option value="5/4">5/4</option>
//               <option value="6/8">6/8</option>
//               <option value="7/8">7/8</option>
//             </select>
//             {/* <label>Jahr</label>
//             <input
//               type="number"
//               value={song.year}
//               onChange={e => setSong({ ...song, year: e.target.value })}
//             /> */}
//             <button onClick={() => alert(JSON.stringify(song))}>
//               Export JSON
//             </button>
//           </div>
//         </div>
//         {didMount ? (
//           <PDFViewer key={reference} style={{ flex: 1 }}>
//             <Document>
//               <Song {...song} />
//             </Document>
//           </PDFViewer>
//         ) : null}
//       </div>
//     </div>
//   )
// }

// export default () => (
//   <FelaProvider>
//     <Editor />
//   </FelaProvider>
// )

import songList from '@bdp-rps/liedgut'

export default () => (
  <div>
    {songList.map(name => (
      <div>
        <a href={'/liedgut/' + name}>{name}</a>
      </div>
    ))}
  </div>
)
