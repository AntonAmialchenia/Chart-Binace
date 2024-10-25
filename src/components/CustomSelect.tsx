import { FC } from 'react';
import { TRADING_PAIRS } from '../utils/constatnts';

interface CustomSelectProps {
  setPair: (value: string) => void;
  value: string;
}

export const CustomSelect: FC<CustomSelectProps> = (props) => {
  const { setPair, value } = props;
  return (
    <select
      className="select"
      value={value}
      onChange={(e) => setPair(e.target.value)}>
      {TRADING_PAIRS.map((tradingPair) => (
        <option key={tradingPair} value={tradingPair}>
          {tradingPair}
        </option>
      ))}
    </select>
  );
};
