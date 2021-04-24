import React, { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState("Привет")

  const reverseMessage = () => setValue(value.split('').reverse().join(''))

  const insertSpacesBetweenChars = () => setValue(value.split('').join(' '))

  const numerateChars = () => 
    setValue(
      value
        .split('')
        .map((char, index) =>  `${index+1}: ${char}`)
        .join('\n')
    )

  const getStat = () => {
    let charsArray = value.split('').filter(char => char !== ' ')
    let charStat = {}

    charsArray.forEach((el) => {
      el = el.toLowerCase()
      charStat[el] = (charStat[el] + 1) || 1
    })

    console.log(charStat);

    setValue(
      Object
        .keys(charStat)
        .map(char => `${char}: ${(charStat[char] * 100 / charsArray.length).toFixed(3)}%`) 
        .join('\n')
    )
  }

  return (
    <div>
      <textarea value={value} onChange={e => setValue(e.target.value)} />
      <button onClick={reverseMessage}>Задом-наперед</button>
      <button onClick={insertSpacesBetweenChars}>Вставить пробелы</button>
      <button onClick={numerateChars}>Пронумеровать</button>
      <button onClick={getStat}>Статистика</button>
    </div>
  )
}

export default App
