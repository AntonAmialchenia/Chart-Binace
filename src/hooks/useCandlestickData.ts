import { CandlestickData, Time } from 'lightweight-charts';
import { useEffect, useState } from 'react';
import { getChartData } from '../api';
import { ChartParams } from '../utils/types';

export const useCandlestickData = ({
  chartParams,
  pair,
}: {
  chartParams: ChartParams;
  pair: string;
}) => {
  const [candlestickData, setCandlestickData] = useState<CandlestickData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getChartData({
          symbol: pair.split('/').join(''),
          ...chartParams,
        });

        const formattedData: CandlestickData[] = response.data.map((d) => ({
          time: (d[0] / 1000) as Time,
          open: parseFloat(d[1]),
          high: parseFloat(d[2]),
          low: parseFloat(d[3]),
          close: parseFloat(d[4]),
        }));
        setCandlestickData(formattedData);
      } catch (error) {
        setError('Failed to fetch chart data');
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [chartParams, pair]);

  return { candlestickData, isLoading, error };
};
