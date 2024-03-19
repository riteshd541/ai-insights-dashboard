import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './ResponseTimeChart.css';

interface ResponseTimeProps {
  data: { date: string; average_time: number }[];
}

const ResponseTimeChart: React.FC<ResponseTimeProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="average_time" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ResponseTimeChart;
