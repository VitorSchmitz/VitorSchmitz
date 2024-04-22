import família1 from './assets/família1.png'
import família2 from './assets/família2.png'
import família3 from './assets/família3.png'
import família4 from './assets/família4.png'
import família5 from './assets/família5.png'
import família6 from './assets/família6.png'
import SESILogo from '/Logo_SESI.jpg'

import './App.css'

function App() {

  return (
    <>
      <div>
        <img src={SESILogo} className="logo" alt="SESI Logo" />
        <img src={família1} className="logo Família 1" alt="Família 1" />
        <img src={família2} className="logo Família 2" alt="Família 2" />
        <img src={família3} className="logo Família 3" alt="Família 3" />
        <img src={família4} className="logo Família 4" alt="Família 4" />
        <img src={família5} className="logo Família 5" alt="Família 5" />
        <img src={família6} className="logo Família 6" alt="Família 6" />
      </div>
      <h1>Dia da Família</h1>
      <h2>Será um dia especial para comemorar com a sua família!</h2>
      <h3>Dia 20/04/2024 a partir das 8:00 até 12:00 no SENAI São José</h3>
      <h4>Vitor Schmitz - 3B</h4>
      <div className="card">
      </div>
    </>
  )
}

export default App
