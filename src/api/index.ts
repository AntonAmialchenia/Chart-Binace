import axios, { AxiosRequestConfig } from 'axios';

const BINANCE_API_URL = 'https://api.binance.com/api/v3/uiKlines';

type BinanceRawData = [number, string, string, string, string, ...unknown[]];

export const getChartData = (params: {
  symbol: string;
  interval: string;
  limit: number;
}) => {
  const config: AxiosRequestConfig = {
    params,
  };
  return axios.get<BinanceRawData[]>(BINANCE_API_URL, config);
};
