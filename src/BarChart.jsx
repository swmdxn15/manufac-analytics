import React from 'react';
import ReactECharts from 'echarts-for-react';

const BarChart = ({ alcoholData }) => {
  const option = {
    xAxis: {
      type: 'category',
      data: alcoholData.map(item => item.Alcohol),
      name: 'Alcohol'
    },
    yAxis: {
      type: 'value',
      name: 'Magnesium'
    },
    series: [{
      data: alcoholData.map(item => item.Magnesium),
      type: 'bar'
    }]
  };

  return (
  
      <ReactECharts option={option} />
  );
};

export default BarChart;
