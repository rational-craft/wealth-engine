export function calculateForecast({ startingNetWorth, income, expenses, returnRate, inflationRate, duration }) {
  const data = []
  let netWorth = startingNetWorth
  const cashFlow = income - expenses
  const adjustedGrowth = (returnRate - inflationRate) / 100

  for (let year = 1; year <= duration; year++) {
    netWorth = (netWorth + cashFlow) * (1 + adjustedGrowth)
    data.push({ year, netWorth: Math.round(netWorth) })
  }

  const finalNetWorth = netWorth
  const cagr = Math.pow(finalNetWorth / startingNetWorth, 1 / duration) - 1

  return { data, stats: { cagr, finalNetWorth: Math.round(finalNetWorth), cashFlow } }
}
