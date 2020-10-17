import React, { useRef, useState, useEffect } from 'react'
import { Box, Button } from '@bdp-rps/ui'
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
  return notation.replace(/\"[A-Z0-7()]*\"/gi, match => {
    return match
      .replace(/[() ]+/gi, '')
      .replace('h', 'b')
      .replace('H', 'B')
      .replace(
        /[a-z]/g,
        match => match.charAt(0).toUpperCase() + 'm' + match.substr(1)
      )
      .replace('is', '#')
      .replace('s', 'b')
  })
}
export default function Notation({
  notation,
  tempo,
  options = {},
  selectionOffset = 0,
  textAreaRef,
}) {
  const [synthControl, setSynthControl] = useState()
  const paperRef = useRef()
  const audioRef = useRef()

  const { parserParams = {}, engraverParams = {}, renderParams = {} } = options

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

      const visualObj = ABC.renderAbc(paperRef.current, notation, {
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
      })[0]

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
              qpm: tempo,
              chordsOff: true,
            })
          }
        })
    }
  }, [synthControl, notation, paperRef, audioRef, textAreaRef])

  return (
    <Box>
      <Box extend={{ overflow: 'auto' }}>
        <Box minWidth={700} width="100%">
          <Box ref={paperRef} id="paper" />
        </Box>
      </Box>
      <Box direction="row">
        <Box grow={1} paddingRight={[0, , '20%']} ref={audioRef} />
      </Box>
    </Box>
  )
}
