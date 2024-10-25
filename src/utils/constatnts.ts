export const CHART_INTERVALS = {
  HOUR: { interval: '1m', limit: 60 },
  DAY: { interval: '15m', limit: 96 },
} as const;

export const TRADING_PAIRS = [
  'BTC/USDT',
  'ETH/USDT',
  'BNB/USDT',
  'DOT/USDT',
  'LTC/USDT',
  'LINK/USDT',
  'BCH/USDT',
];

export const buttons = [
  {
    name: 'За час',
    value: CHART_INTERVALS.HOUR,
  },
  {
    name: 'За сутки',
    value: CHART_INTERVALS.DAY,
  },
];
