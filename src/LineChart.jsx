import React from 'react';
import ReactECharts from 'echarts-for-react';

const LineChart = ({ flavAsh }) => {
  const option = {
    xAxis: {
      type: 'value',
      name: 'Flavanoids'
    },
    yAxis: {
      type: 'value',
      name: 'Ash'
    },
    series: [{
      data: flavAsh,
      type: 'line'
    }]
  };

  return (
    <ReactECharts option={option} />
  );
};

export default LineChart;
