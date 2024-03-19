import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './CategoryDistributionChart.css';

interface CategoryDistributionProps {
  data: { [key: string]: number };
}

const CategoryDistributionChart: React.FC<CategoryDistributionProps> = ({ data }) => {
  const chartData = Object.keys(data).map(category => ({
    category,
    queries: data[category]
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={chartData}>
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="queries" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CategoryDistributionChart;
