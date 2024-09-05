import { useState } from 'react'
import emojis from '../../Emojis'
import './App.css'
import Gameboard from '../Gameboard/Gameboard'


const shuffleCards = () => {
  let cards = emojis.concat(emojis)
  
  return cards
    .map((emoji, index) => ({emoji, id: index % emojis.length}))
    .sort(() => Math.random() - 0.5) 
  
}

function App() {
const [shuffledCards, setShuffledCards] = useState(shuffleCards())

  return (
    <div className='App'>
     <h1>Memory Flip</h1>
     <Gameboard shuffledCards={shuffledCards}/>
    </div>
  )
}
export default App


// pretend: emojis A B C
//index     index % emojis.length = paired id
// 0 A      0 & 3 = 0
// 1 B      1 & 3 = 1
// 2 C      2 % 3 = 2
// 3 A      3 & 3 = 0
// 4 B      4 & 3 = 1
// 5 C      5 & 3 = 2