import React from 'react'
import DarkModeToggle from './DarkModeToggle.jsx'

export default function ScenarioToggle({ scenario, setScenario }) {
  const scenarios = ['Base', 'Aggressive', 'Conservative']
  return (
    <nav className="flex items-center space-x-2 p-4">
      {scenarios.map((s) => (
        <button
          key={s}
          onClick={() => setScenario(s)}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
            scenario === s
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-200'
          }`}
        >
          {s}
        </button>
      ))}
      <DarkModeToggle />
    </nav>
  )
}
