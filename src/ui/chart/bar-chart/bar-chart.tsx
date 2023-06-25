import { VictoryBar, VictoryChart, VictoryContainer } from 'victory';

export interface BarChartData {
  x: string;
  y: number;
}

export interface BarChartProps {
  data: BarChartData[];
}

export const BarChart = (props: BarChartProps) => {
  return (
    <VictoryChart
      domainPadding={45}
      // override the default container styles
      // to allow the chart to be responsive to touch events
      // https://github.com/FormidableLabs/victory/issues/1037#issuecomment-623048143
      containerComponent={
        <VictoryContainer
          style={{
            pointerEvents: 'auto',
            touchAction: 'auto',
            userSelect: 'auto',
          }}
        />
      }
    >
      <VictoryBar
        data={props.data}
        domainPadding={{ x: 0, y: 0 }}
        labels={({ datum }) => `${datum.y}`}
      />
    </VictoryChart>
  );
};
