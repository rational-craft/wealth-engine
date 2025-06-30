import React from 'react'

function InputField({ label, value, onChange, type = 'number' }) {
  return (
    <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow mb-4 transition-colors">
      <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-200">
        {label}
      </label>
      <input
        type={type}
        className="w-full rounded-md border-gray-300 focus:border-blue-400 focus:ring-blue-400 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  )
}

export default function InputPanel({ inputs, setInputs }) {
  const handleChange = (key) => (val) => {
    setInputs({ ...inputs, [key]: val })
  }

  return (
    <aside className="w-full max-w-sm p-4 overflow-y-auto">
      <InputField label="Starting Net Worth" value={inputs.startingNetWorth} onChange={handleChange('startingNetWorth')} />
      <InputField label="Annual Income" value={inputs.income} onChange={handleChange('income')} />
      <InputField label="Annual Expenses" value={inputs.expenses} onChange={handleChange('expenses')} />
      <InputField label="Investment Return (%)" value={inputs.returnRate} onChange={handleChange('returnRate')} />
      <InputField label="Inflation Rate (%)" value={inputs.inflationRate} onChange={handleChange('inflationRate')} />
      <InputField label="Forecast Duration (years)" value={inputs.duration} onChange={handleChange('duration')} />
    </aside>
  )
}
