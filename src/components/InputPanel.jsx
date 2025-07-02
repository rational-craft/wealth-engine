import React from 'react'

export default function InputPanel({ inputs, onChange }) {
  const handleChange = (key) => (e) => {
    const value = parseFloat(e.target.value)
    onChange({ ...inputs, [key]: isNaN(value) ? 0 : value })
  }

  const Item = ({ label, value, keyName }) => (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 mb-4">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
        {label}
      </label>
      <input
        type="number"
        className="w-full p-2 rounded border-gray-300 dark:bg-gray-700 dark:text-white"
        value={value}
        onChange={handleChange(keyName)}
      />
    </div>
  )

  return (
    <div className="w-72 p-4 overflow-y-auto">
      <Item label="Starting Net Worth" value={inputs.start} keyName="start" />
      <Item label="Annual Income" value={inputs.income} keyName="income" />
      <Item label="Annual Expenses" value={inputs.expenses} keyName="expenses" />
      <Item label="Investment Return (%)" value={inputs.returnRate} keyName="returnRate" />
      <Item label="Inflation Rate (%)" value={inputs.inflation} keyName="inflation" />
      <Item label="Forecast Duration (years)" value={inputs.years} keyName="years" />
    </div>
  )
}
