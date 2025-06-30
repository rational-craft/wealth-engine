import React from 'react'

export default function ScenarioToggle({ scenarios, current, onChange, darkMode, onToggleDark }) {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white dark:bg-gray-900 shadow">
      <div className="flex space-x-2">
        {scenarios.map((s) => (
          <button
            key={s}
            onClick={() => onChange(s)}
            className={`px-3 py-1 rounded-md text-sm font-medium ${current === s ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}
          >
            {s}
          </button>
        ))}
      </div>
      <button
        onClick={onToggleDark}
        className="ml-auto px-2 py-1 text-sm rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
      >
        {darkMode ? 'Light' : 'Dark'}
      </button>
    </div>
  )
}
