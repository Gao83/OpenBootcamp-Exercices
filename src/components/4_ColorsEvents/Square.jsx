import React, { useState, useEffect, useRef } from 'react'
import './square.css'

function Square() {

  const black = 'rgb(0,0,0)'

  const [color, setColor] = useState(black);
  const [change, setChange] = useState(false)

  const colorRandom = () => {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgb = `rgb(${r},${g},${b})`
    setColor(rgb)
    setChange(true)
  }

  let interval = useRef()

  useEffect(() => {

    if (change) {
      interval.current = setInterval(() => {
        colorRandom()
      }, 1000);
      console.log('arranca')

    } else {
      stopColor()
      console.log('para')
    }
  }, [change])


  const stopColor = () => {
    setColor(black)
    setChange(false)
    clearInterval(interval.current)
  }
  console.log(change)

  return (
    <div className='square' onMouseEnter={colorRandom} onMouseLeave={stopColor} onDoubleClick={stopColor} style={{ background: color }} >
      <p>{color}</p>
    </div>
  )
}

export default Square