/* barree test C
  ctx.beginPath();
  ctx.fillStyle = "black"
ctx.arc(offset, topPad,circleSize, 0, 2 * Math.PI, false);
ctx.fill();
ctx.beginPath();
ctx.rect(offset-circleSize,topPad,circleSize*2,stringStep);
ctx.fill();
*/
import React, { useEffect, useRef } from 'react'

const equivalent = {
  Gis: 'As',
  Gis7: 'As7',
  gis: 'as',
  gis7: 'as7',
  Dis: 'Es',
  Dis7: 'Es7',
  dis: 'es',
  dis7: 'es7',
  Ais: 'B',
  Ais7: 'B7',
  ais: 'b',
  ais7: 'b7',
  Cis: 'Des',
  Cis7: 'Des7',
  cis: 'des',
  cis7: 'des7',
  Fis: 'Ges',
  Fis7: 'Ges7',
  fis: 'ges',
  fis7: 'ges7',
}

const defaultConfig = {
  stringStep: 15,
  fretStep: 20,
  circleSize: 7,
  leftPad: 8,
  strings: {
    e: 1,
    b: 2,
    G: 3,
    D: 4,
    A: 5,
    E: 6,
  },
}

export default function Chord({ name, chord, config }) {
  const canvasRef = useRef()

  const alternative = equivalent[name]

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    // clear the canvas on every rerender
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const options = {
      ...defaultConfig,
      ...config,
    }

    options.topPad = Math.max(options.circleSize, 10)

    const stringCount = Object.keys(options.strings).length - 1
    const height = options.stringStep * stringCount

    const maxFret = Object.keys(chord).reduce(
      (max, str) => Math.max(chord[str].fret, max),
      4
    )

    canvas.height = options.topPad * 2 + stringCount * options.stringStep
    canvas.width = options.leftPad * 2 + maxFret * options.fretStep

    if (window.devicePixelRatio >= 2) {
      canvas.height *= 2
      canvas.width *= 2

      canvas.style.height = canvas.height / 2 + 'px'
      canvas.style.width = canvas.width / 2 + 'px'
      ctx.scale(2, 2)
    }

    if (options.showString) {
      ctx.font = '16px Arial'
      ctx.fillStyle = 'rgb(120, 120, 120)'

      Object.keys(options.strings).forEach(str =>
        ctx.fillText(
          str,
          2,
          options.stringStep * options.strings[str] - (options.stringStep - 16)
        )
      )
    }

    // thick top border
    ctx.beginPath()
    ctx.fillStyle = 'rgb(40, 40, 40)'
    ctx.rect(options.leftPad - 6, options.topPad - 1, 5, height + 2)
    ctx.fill()

    // fret
    ctx.beginPath()
    ctx.lineWidth = '2'
    ctx.strokeStyle = 'rgb(140, 140, 140)'

    for (var i = 1; i < maxFret; ++i) {
      ctx.moveTo(options.leftPad + options.fretStep * i, options.topPad)
      ctx.lineTo(
        options.leftPad + options.fretStep * i,
        height + options.topPad
      )
      ctx.stroke()
    }

    // strings
    ctx.beginPath()
    ctx.strokeStyle = 'black'

    Object.keys(options.strings).forEach(str => {
      ctx.rect(
        options.leftPad,
        options.topPad,
        options.fretStep * maxFret,
        options.stringStep * (options.strings[str] - 1)
      )
      ctx.stroke()
    })

    // fingers
    const offset = options.leftPad + options.fretStep / 2

    function drawBaree(fret, start, end, finger) {
      ctx.beginPath()
      ctx.fillStyle = 'black'
      ctx.arc(
        offset + options.fretStep * fret,
        options.topPad + options.stringStep * start,
        options.circleSize,
        0,
        2 * Math.PI,
        false
      )
      ctx.fill()
      ctx.beginPath()
      ctx.rect(
        offset + options.fretStep * fret - options.circleSize,
        options.topPad + options.stringStep * start,
        options.circleSize * 2,
        options.stringStep * (end - start)
      )
      ctx.arc(
        offset + options.fretStep * fret,
        options.topPad +
          options.stringStep * start +
          options.stringStep * (end - start),
        options.circleSize,
        0,
        2 * Math.PI,
        false
      )
      ctx.fill()

      if (finger) {
        ctx.beginPath()
        ctx.font = '11px Arial'
        ctx.fillStyle = 'rgb(220, 220, 220)'
        ctx.fillText(
          finger,
          offset + options.fretStep * fret - 3,
          options.topPad +
            (options.stringStep * start) / 2 +
            options.stringStep * (end / 2) +
            options.circleSize / 2
        )
      }
    }

    function drawChord(fret, pos, finger, optional = false) {
      ctx.beginPath()
      ctx.fillStyle = optional ? 'rgb(120, 120, 120)' : 'black'
      ctx.arc(
        offset + options.fretStep * fret,
        options.topPad + options.stringStep * pos,
        options.circleSize,
        0,
        2 * Math.PI,
        false
      )
      ctx.fill()

      if (finger) {
        ctx.beginPath()
        ctx.font = '11px Arial'
        ctx.fillStyle = 'rgb(220, 220, 220)'
        ctx.fillText(
          finger,
          offset + options.fretStep * fret - 3,
          options.topPad + options.stringStep * pos + 3.5
        )
      }
    }

    if (chord.barre) {
      const { fret, finger, from, to } = chord.barre
      drawBaree(
        fret - 1,
        options.strings[from] - 1,
        options.strings[to] - 1,
        finger
      )
    }

    Object.keys(chord)
      .filter(k => k !== 'barre')
      .forEach(list => {
        const { fret, finger = null, optional } = chord[list]

        let stringIndex = options.strings[list] - 1
        let fretIndex = fret - 1

        drawChord(fretIndex, stringIndex, finger, optional)
      })
  }, [chord, name, config])

  return (
    <div style={{ padding: 5 }}>
      <div
        style={{
          textAlign: 'center',
          fontFamily: 'Aleo',
          lineHeight: 1,
          fontSize: 20,
        }}>
        {name}
        {alternative ? '/' + alternative : ''}
      </div>
      <canvas ref={canvasRef} />
    </div>
  )
}
