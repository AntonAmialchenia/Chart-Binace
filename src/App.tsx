import { useState } from 'react';
import { CHART_INTERVALS, TRADING_PAIRS } from './utils/constatnts';
import { ChartParams } from './utils/types';
import { useCandlestickData } from './hooks/useCandlestickData';
import { ButtonsInterval } from './components/ButtonsInterval';
import { CustomSelect } from './components/CustomSelect';
import { CandlestickChart } from './components/CandlestickChart';

function App() {
  const [pair, setPair] = useState(TRADING_PAIRS[0]);
  const [chartParams, setChartParams] = useState<ChartParams>(
    CHART_INTERVALS.HOUR,
  );
  const { error, candlestickData, isLoading } = useCandlestickData({
    chartParams,
    pair,
  });

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div>
      <h1>{pair} Candlestick Chart</h1>
      <ButtonsInterval setChartParams={setChartParams} />
      <CustomSelect value={pair} setPair={setPair} />
      {isLoading ? (
        <div className="loading-indicator">Loading data...</div>
      ) : (
        <CandlestickChart data={candlestickData} />
      )}
    </div>
  );
}

export default App;
