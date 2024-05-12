import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import Sales from '../databases/salesOverTime.Sales.json'

const SalesDB = Sales

const keyToLabel = {
  dolarsGained: 'Dolars Gained over the years',
  repairsDone: 'Repairs Done over the years',
  customersReturned: 'Customers retured over the years',
  partsSold: 'Parts Sold over the years',
};

const colors = {
  dolarsGained: 'lightgreen',
  repairsDone: 'lightblue',
  partsSold: 'blue',
  customersReturned: 'orange',
};

const stackStrategy = {
  stack: 'total',
  area: true,
  stackOffset: 'none', // To stack 0 on top of others
};

const customize = {
  height: 300,
  legend: { hidden: true },
  margin: { top: 5 },
  stackingOrder: 'descending',
};

export default function LineDataset() {
  return (
    <LineChart
      xAxis={[
        {
          dataKey: 'year',
          valueFormatter: (value) => value.toString(),
          min: 2015,
          max: 2024,
        },
      ]}
      series={Object.keys(keyToLabel).map((key) => ({
        dataKey: key,
        label: keyToLabel[key],
        color: colors[key],
        showMark: false,
        ...stackStrategy,
      }))}
      dataset={SalesDB}
      {...customize}
    />
  );
}
