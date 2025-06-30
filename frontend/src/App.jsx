import React, { useState, useEffect } from 'react'
import InputPanel from './components/InputPanel.jsx'
import ScenarioToggle from './components/ScenarioToggle.jsx'
import NetWorthChart from './components/NetWorthChart.jsx'
import ForecastStats from './components/ForecastStats.jsx'
import { calculateForecast } from './utils/calculateForecast.js'

const defaultInputs = {
  startingNetWorth: 100000,
  income: 100000,
  expenses: 60000,
  returnRate: 6,
  inflationRate: 2,
  duration: 30,
}

export default function App() {
  const scenarios = ['Base', 'Aggressive', 'Conservative']
  const [scenario, setScenario] = useState('Base')
  const [inputs, setInputs] = useState(() => {
    const stored = localStorage.getItem('inputs')
    if (stored) return JSON.parse(stored)
    return scenarios.reduce((acc, s) => ({ ...acc, [s]: { ...defaultInputs } }), {})
  })

  useEffect(() => {
    localStorage.setItem('inputs', JSON.stringify(inputs))
  }, [inputs])

  const current = inputs[scenario]
  const { data, stats } = calculateForecast(current)

  const updateInputs = (vals) => {
    setInputs({ ...inputs, [scenario]: vals })
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white">
      <ScenarioToggle scenario={scenario} setScenario={setScenario} />
      <div className="flex flex-1 flex-col md:flex-row">
        <InputPanel inputs={current} setInputs={updateInputs} />
        <main className="flex-1 p-4">
          <NetWorthChart data={data} />
          <ForecastStats stats={stats} />
        </main>
      </div>
    </div>
  )
}
