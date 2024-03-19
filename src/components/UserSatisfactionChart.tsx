import React from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';
import './UserSatisfactionChart.css';

interface UserSatisfactionProps {
  data: { rating: number; count: number }[];
}

const UserSatisfactionChart: React.FC<UserSatisfactionProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie data={data} dataKey="count" nameKey="rating" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default UserSatisfactionChart;
