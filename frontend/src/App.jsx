import { useState } from 'react'
import './App.css'
import LiveKitModal from './components/LiveKitModal';

function App() {
  const [showSupport, setShowSupport] = useState(false);

  const handleSupportClick = () => {
    setShowSupport(true)
  }

  return (
    <div className="app">
      <header className="header">
        <div className="logo">AutoZone</div>
      </header>

      <main>
        <section className="hero">
          <h1>Get the Right Parts. Right Now</h1>
          <p>Free Next Day Delivery on Eligible Orders</p>
          <div className="search-bar">
            <input type="text" placeholder='Enter vehicle or part number'></input>
            <button>Search</button>
          </div>
        </section>

        <button className="support-button" onClick={handleSupportClick}>
          Talk to an Agent!
        </button>
      </main>

      {showSupport && <LiveKitModal setShowSupport={setShowSupport}/>}
    </div>
  )
}

export default App