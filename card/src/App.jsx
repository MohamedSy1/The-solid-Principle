import { useState } from 'react'
import CardContainer from './components/cardContainer'
import './index.css'


function App() {
  
  const links = ["GitHub", "Frontend Mentor", "LinkedIn", "Twitter", "Instagram"];
  const name = "Mohamed Sy"
  const address = "Bronx, New York"
  const description = "Full Stack developer and avid reader."

  return (
    <div>
      <CardContainer links={links} name={name} address={address} description={description}/>
    </div>
  )
}

export default App
