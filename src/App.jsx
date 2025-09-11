import React from 'react'
import Header from './components/Header'
import './App.css'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
function App() {
  return (
    <div>
      <Header/>
      <div className="container">
        <Balance/>
      </div>
      <div className="expenses">
        <IncomeExpenses/>
      </div>
    </div>
  )
}

export default App