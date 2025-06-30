import React, { useState, useEffect } from 'react'
import ScenarioToggle from './components/ScenarioToggle'
import InputPanel from './components/InputPanel'
import NetWorthChart from './components/NetWorthChart'
import ForecastStats from './components/ForecastStats'
import calculateForecast from './utils/calculateForecast'

const defaultInputs = {
  start: 100000,
  income: 100000,
  expenses: 60000,
  returnRate: 6,
  inflation: 2,
  years: 30,
}

const scenarios = ['Base', 'Aggressive', 'Conservative']

export default function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [current, setCurrent] = useState(scenarios[0])
  const [inputs, setInputs] = useState(() => {
    const saved = localStorage.getItem('inputs')
    return (
      saved ? JSON.parse(saved) : {
        Base: defaultInputs,
        Aggressive: { ...defaultInputs, returnRate: 8, expenses: 50000 },
        Conservative: { ...defaultInputs, returnRate: 4, expenses: 70000 },
      }
    )
  })

  useEffect(() => {
    localStorage.setItem('inputs', JSON.stringify(inputs))
  }, [inputs])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  const scenarioInputs = inputs[current]
  const handleInputsChange = (vals) => {
    setInputs({ ...inputs, [current]: vals })
  }

  const forecast = calculateForecast({
    start: scenarioInputs.start,
    income: scenarioInputs.income,
    expenses: scenarioInputs.expenses,
    returnRate: scenarioInputs.returnRate,
    inflation: scenarioInputs.inflation,
    years: scenarioInputs.years,
  })

  return (
    <div className="h-full flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <ScenarioToggle
        scenarios={scenarios}
        current={current}
        onChange={setCurrent}
        darkMode={darkMode}
        onToggleDark={() => setDarkMode(!darkMode)}
      />
      <div className="flex flex-1 overflow-hidden">
        <InputPanel inputs={scenarioInputs} onChange={handleInputsChange} />
        <main className="flex-1 p-4 overflow-auto">
          <NetWorthChart data={forecast.data} />
          <div className="mt-4">
            <ForecastStats stats={forecast} />
          </div>
        </main>
      </div>
    </div>
  )
}
