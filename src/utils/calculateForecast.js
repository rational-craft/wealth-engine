export default function calculateForecast({
  start,
  income,
  expenses,
  returnRate,
  inflation,
  years,
}) {
  const netCashflow = income - expenses;
  const adjustedGrowth = (returnRate - inflation) / 100;
  const data = [{ year: 0, netWorth: start }];
  let netWorth = start;
  for (let i = 1; i <= years; i++) {
    netWorth = (netWorth + netCashflow) * (1 + adjustedGrowth);
    data.push({ year: i, netWorth });
  }
  const final = netWorth;
  const cagr =
    years > 0 ? (Math.pow(final / start, 1 / years) - 1) * 100 : 0;
  return { data, cagr, final, netCashflow };
}
