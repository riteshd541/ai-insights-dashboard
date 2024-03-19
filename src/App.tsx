import React, { useEffect, useContext } from 'react';
import AIDataContext from './context/AIDataContext';
import CategoryDistributionChart from './components/CategoryDistributionChart';
import ResponseTimeChart from './components/ResponseTimeChart';
import UserSatisfactionChart from './components/UserSatisfactionChart';
import UsageStatisticsChart from './components/UsageStatisticsChart';
import './App.css';

const App: React.FC = () => {
  const { insightSummary, categoryDistribution, responseTimes, userSatisfaction, usageStatistics, fetchAIData } = useContext(
    AIDataContext
  );

  useEffect(() => {
    fetchAIData(); // Fetch AI data on component mount
  }, [fetchAIData]);

  return (
    <div className="App">
      <h1>AI Insights Dashboard</h1>
      <div className="charts-container">
        {insightSummary && (
          <div className="chart">
            <h2>Insight Summary</h2>
            <p>Total Queries: {insightSummary.total_queries}</p>
            <p>Successful Queries: {insightSummary.successful_queries}</p>
            <p>Failed Queries: {insightSummary.failed_queries}</p>
            <p>Average Response Time: {insightSummary.average_response_time}</p>
          </div>
        )}
        {categoryDistribution && (
          <div className="chart">
            <h2>Category Distribution</h2>
            <CategoryDistributionChart data={categoryDistribution} />
          </div>
        )}
        {responseTimes && (
          <div className="chart">
            <h2>Response Times</h2>
            <h3>Daily</h3>
            <ResponseTimeChart data={responseTimes.day_wise} />
            <h3>Weekly</h3>
            <ResponseTimeChart data={responseTimes.week_wise} />
          </div>
        )}
        {userSatisfaction && (
          <div className="chart">
            <h2>User Satisfaction</h2>
            <UserSatisfactionChart data={userSatisfaction.ratings} />
          </div>
        )}
        {usageStatistics && (
          <div className="chart">
            <h2>Usage Statistics</h2>
            <h3>By Platform</h3>
            <UsageStatisticsChart data={usageStatistics.by_platform} />
            <h3>By Country</h3>
            <UsageStatisticsChart data={usageStatistics.by_country} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
