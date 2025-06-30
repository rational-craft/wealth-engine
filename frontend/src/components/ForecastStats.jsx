import React from 'react'

export default function ForecastStats({ stats }) {
  const items = [
    { label: 'CAGR', value: `${(stats.cagr * 100).toFixed(2)}%` },
    { label: 'Final Net Worth', value: `$${stats.finalNetWorth.toLocaleString()}` },
    { label: 'Annual Cash Flow', value: `$${stats.cashFlow.toLocaleString()}` },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {items.map((item) => (
        <div key={item.label} className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow transition-colors">
          <div className="text-sm text-gray-500 dark:text-gray-300">{item.label}</div>
          <div className="text-xl font-semibold mt-1 text-gray-900 dark:text-white">{item.value}</div>
        </div>
      ))}
    </div>
  )
}
