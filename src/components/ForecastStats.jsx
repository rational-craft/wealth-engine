import React from 'react'

export default function ForecastStats({ stats }) {
  const Item = ({ label, value }) => (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 text-center">
      <div className="text-sm text-gray-500 dark:text-gray-300">{label}</div>
      <div className="text-xl font-semibold text-gray-900 dark:text-gray-100">{value}</div>
    </div>
  )

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <Item label="CAGR" value={`${stats.cagr.toFixed(2)}%`} />
      <Item label="Final Net Worth" value={`$${stats.final.toLocaleString()}`} />
      <Item label="Annual Cash Flow" value={`$${stats.netCashflow.toLocaleString()}`} />
    </div>
  )
}
