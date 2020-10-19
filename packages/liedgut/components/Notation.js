import React, { useRef, useState, useEffect } from 'react'
import { Box, Button, Checkbox, TextInput } from '@bdp-rps/ui'
import ABC, { synth } from 'abcjs'

function CursorControl() {
  var self = this

  self.onReady = function() {
    // var downloadLink = document.querySelector('.download')
    // downloadLink.addEventListener('click', download)
    // downloadLink.setAttribute('style', '')
    // var clickEl = document.querySelector('.click-explanation')
    // clickEl.setAttribute('style', '')
  }
  self.onStart = function() {
    var svg = document.querySelector('#paper svg')
    var cursor = document.createElementNS('http://www.w3.org/2000/svg', 'line')
    cursor.setAttribute('class', 'abcjs-cursor')
    cursor.setAttributeNS(null, 'x1', 0)
    cursor.setAttributeNS(null, 'y1', 0)
    cursor.setAttributeNS(null, 'x2', 0)
    cursor.setAttributeNS(null, 'y2', 0)
    svg.appendChild(cursor)
  }

  self.beatSubdivisions = 2
  // self.onBeat = function(beatNumber, totalBeats, totalTime) {
  //   if (!self.beatDiv) self.beatDiv = document.querySelector('.beat')
  //   self.beatDiv.innerText =
  //     'Beat: ' +
  //     beatNumber +
  //     ' Total: ' +
  //     totalBeats +
  //     ' Total time: ' +
  //     totalTime
  // }
  self.onEvent = function(ev) {
    if (ev.measureStart && ev.left === null) return // this was the second part of a tie across a measure line. Just ignore it.

    var lastSelection = document.querySelectorAll('#paper svg .highlight')
    for (var k = 0; k < lastSelection.length; k++)
      lastSelection[k].classList.remove('highlight')

    for (var i = 0; i < ev.elements.length; i++) {
      var note = ev.elements[i]

      for (var j = 0; j < note.length; j++) {
        note[j].classList.add('highlight')
      }
    }

    var cursor = document.querySelector('#paper svg .abcjs-cursor')
    if (cursor) {
      cursor.setAttribute('x1', ev.left - 2)
      cursor.setAttribute('x2', ev.left - 2)
      cursor.setAttribute('y1', ev.top)
      cursor.setAttribute('y2', ev.top + ev.height)
    }
  }
  self.onFinished = function() {
    var els = document.querySelectorAll('svg .highlight')
    for (var i = 0; i < els.length; i++) {
      els[i].classList.remove('highlight')
    }
    var cursor = document.querySelector('#paper svg .abcjs-cursor')
    if (cursor) {
      cursor.setAttribute('x1', 0)
      cursor.setAttribute('x2', 0)
      cursor.setAttribute('y1', 0)
      cursor.setAttribute('y2', 0)
    }
  }
}

function normalizeNotation(notation) {
  return notation.replace(/\"([A-Z0-7()]+)\"/gi, (_, match) => {
    return (
      '"' +
      match
        .replace(/[() ]+/g, '')
        .replace('b', 'bb')
        .replace('B', 'Bb')
        .replace('h', 'b')
        .replace('H', 'B')
        .replace(
          /^[a-z]/g,
          match => match.charAt(0).toUpperCase() + 'm' + match.substr(1)
        )
        .replace('is', '#')
        .replace('s', 'b') +
      '"'
    )
  })
}

function setTempo(notation, tempo) {
  return notation.replace(/=[0-9]+/, '=' + Math.floor(tempo))
}

export default function Notation({
  notation,
  tempo,
  transpose = 0,
  options = {},
  selectionOffset = 0,
  textAreaRef,
}) {
  const [synthControl, setSynthControl] = useState()
  const [speed, setSpeed] = useState(100)
  const [chords, setChords] = useState(transpose !== 0)
  const paperRef = useRef()
  const audioRef = useRef()

  const { parserParams = {}, engraverParams = {}, renderParams = {} } = options
  const speedPercent = (parseInt(speed) || 20) / 100

  useEffect(() => {
    if (transpose !== 0) {
      setChords(false)
    }
  }, [transpose])

  useEffect(() => {
    if (ABC.synth.supportsAudio()) {
      setSynthControl(new ABC.synth.SynthController())
    }
  }, [])

  useEffect(() => {
    if (synthControl) {
      synthControl.pause()
    }
  }, [notation])

  useEffect(() => {
    if (paperRef.current && audioRef.current && synthControl && notation) {
      const cursorControl = new CursorControl()
      synthControl.load(audioRef.current, cursorControl, {
        // displayLoop: true,
        displayRestart: true,
        displayPlay: true,
        displayProgress: true,
        // displayWarp: true,
      })

      const clickListener = ({
        midiPitches,
        midiGraceNotePitches,
        startChar,
        endChar,
      }) => {
        if (textAreaRef && textAreaRef.current) {
          textAreaRef.current.setSelectionRange(
            startChar - selectionOffset,
            endChar - selectionOffset
          )
        }

        if (midiPitches) {
          ABC.synth.playEvent(
            midiPitches,
            midiGraceNotePitches,
            synthControl.visualObj.millisecondsPerMeasure()
          )
        }
      }

      const notationWithSpeed = setTempo(
        notation,
        parseInt(tempo) * speedPercent
      )

      const visualObj = ABC.renderAbc(
        paperRef.current,
        chords ? normalizeNotation(notationWithSpeed) : notationWithSpeed,
        {
          header_only: false,
          hint_measures: false,
          print: false,
          stop_on_warning: false,
          add_classes: true,
          editable: false,
          listener: null,
          responsive: 'resize',
          paddingleft: 0,
          paddingright: 0,
          paddingtop: 0,
          paddingbottom: 0,
          scale: 1,
          oneSvgPerLine: false,
          scrollHorizontal: false,
          startingTune: 0,
          viewportHorizontal: false,
          ...parserParams,
          ...engraverParams,
          ...renderParams,
          clickListener,
        }
      )[0]

      const midiBuffer = new ABC.synth.CreateSynth()
      midiBuffer
        .init({
          visualObj,
          options: {
            soundFontUrl: 'https://gleitz.github.io/midi-js-soundfonts/FatBoy/',
          },
        })
        .then(function(response) {
          if (synthControl) {
            synthControl.setTune(visualObj, false, {
              chordsOff: !chords,
            })
          }
        })
    }
  }, [synthControl, notation, paperRef, speed, chords, audioRef, textAreaRef])

  return (
    <Box>
      <Box extend={{ overflow: 'auto' }}>
        <Box minWidth={700} width="100%">
          <Box ref={paperRef} id="paper" />
        </Box>
      </Box>
      <Box direction="row" space={2} alignItems="center" paddingRight={8}>
        <Box grow={1} ref={audioRef} />
        <TextInput
          type="number"
          name="speed"
          maskEnd="%"
          min="20"
          onChange={setSpeed}
          value={speed}
        />
        <Checkbox
          label="Akkorde"
          name="chords"
          disabled={transpose !== 0}
          onChange={setChords}
          value={chords}
        />
      </Box>
    </Box>
  )
}
