import { ChartParams } from '../utils/types';
import { buttons } from '../utils/constatnts';

interface ButtonsIntervalProps {
  setChartParams: (value: ChartParams) => void;
}

export const ButtonsInterval = (props: ButtonsIntervalProps) => {
  const { setChartParams } = props;
  return (
    <div className="button-container">
      {buttons.map((button) => (
        <button
          key={button.name}
          onClick={() => setChartParams(button.value)}
          className="button">
          {button.name}
        </button>
      ))}
    </div>
  );
};
