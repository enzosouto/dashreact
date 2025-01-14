// LineChartComponent.js
import React from 'react';
import PropTypes from 'prop-types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import '../App.css';

function LineChartComponent({ dataKey, chartData, metricInfo }) {
  const formatValue = (value, type) => {
    if (type === 'investment') {
      return `R$ ${value.toLocaleString()}`;
    }
    return value.toLocaleString();
  };

  const getTrendInfo = (data) => {
    const lastMonth = data[data.length - 1]?.value || 0;
    const previousMonth = data[data.length - 2]?.value || 0;
    const difference = lastMonth - previousMonth;
    const percentage = previousMonth ? ((difference / previousMonth) * 100).toFixed(1) : 0;

    return `${difference > 0 ? '+' : ''}${percentage}%`;
  };

  return (
    <div className="chart-container">
      <div id="chart-header">
        <h3>{metricInfo[dataKey].title}</h3>
        <div className="trend-info">
          {`${getTrendInfo(chartData[dataKey])} no último mês`}
        </div>
      </div>
      <div style={{ width: '100%', height: '400px', marginTop: '15px' }}>
        <ResponsiveContainer>
          <LineChart data={chartData[dataKey]}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="month" 
              stroke="#666"
              tick={{ fill: '#666', fontSize: 12 }}
            />
            <YAxis 
              stroke="#666"
              tick={{ fill: '#666', fontSize: 12 }}
              tickFormatter={(value) => formatValue(value, dataKey)}
            />
            <Tooltip 
              formatter={(value) => formatValue(value, dataKey)}
              labelFormatter={(label) => `Mês: ${label}`}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke={metricInfo[dataKey].color}
              strokeWidth={2}
              dot={{ r: 4, fill: metricInfo[dataKey].color }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

LineChartComponent.propTypes = {
  dataKey: PropTypes.string.isRequired,
  chartData: PropTypes.object.isRequired,
  metricInfo: PropTypes.object.isRequired,
};

export default LineChartComponent;