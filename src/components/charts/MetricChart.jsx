import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useMetrics } from '../../hooks/useMetrics';
import { formatValue, getTrendInfo } from '../../utils/formatters';
import { chartData, metricInfo } from '../../data/chartData';

const MetricChart = () => {
  const { selectedMetricCard } = useMetrics();

  return (
    <div className="chart-container">
      <div id="chart-header">
        <h3>{metricInfo[selectedMetricCard].title}</h3>
        <div className="trend-info">
          {`${getTrendInfo(chartData[selectedMetricCard])} no último mês`}
        </div>
      </div>
      <div style={{ width: '100%', height: '400px', marginTop: '15px' }}>
        <ResponsiveContainer>
          <LineChart data={chartData[selectedMetricCard]}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="month" 
              stroke="#666"
              tick={{ fill: '#666', fontSize: 12 }}
            />
            <YAxis 
              stroke="#666"
              tick={{ fill: '#666', fontSize: 12 }}
              tickFormatter={(value) => formatValue(value, selectedMetricCard)}
            />
            <Tooltip 
              formatter={(value) => formatValue(value, selectedMetricCard)}
              labelFormatter={(label) => `Mês: ${label}`}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke={metricInfo[selectedMetricCard].color}
              strokeWidth={2}
              dot={{ r: 4, fill: metricInfo[selectedMetricCard].color }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MetricChart;
