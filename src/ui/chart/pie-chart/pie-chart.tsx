import { VictoryContainer, VictoryPie } from 'victory';

export interface PieChartData {
  x: string;
  y: number;
}

export interface PieChartProps {
  colorScale?: string[];
  data: PieChartData[];
}

export const PieChart = (props: PieChartProps) => {
  return (
    <VictoryPie
      data={props.data}
      colorScale={props.colorScale}
      containerComponent={
        <VictoryContainer
          style={{
            pointerEvents: 'auto',
            touchAction: 'auto',
            userSelect: 'auto',
          }}
        />
      }
    />
  );
};
