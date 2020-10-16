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
      (max, str) =>
        Math.max(
          chord[str].reduce((m, f) => Math.max(m, f.fret), 0),
          max
        ),
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

    Object.keys(chord).forEach(list => {
      chord[list].forEach(({ fret, finger = null, optional }) => {
        let stringIndex = options.strings[list] - 1
        let fretIndex = fret - 1

        ctx.beginPath()
        ctx.fillStyle = optional ? 'rgb(120, 120, 120)' : 'black'
        ctx.arc(
          offset + options.fretStep * fretIndex,
          options.topPad + options.stringStep * stringIndex,
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
            offset + options.fretStep * fretIndex - 3,
            options.topPad + options.stringStep * stringIndex + 3.5
          )
        }
      })
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
      </div>
      <canvas ref={canvasRef} />
    </div>
  )
}
