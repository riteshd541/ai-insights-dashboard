import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface AIDataContextType {
  insightSummary: any;
  categoryDistribution: any;
  responseTimes: any;
  userSatisfaction: any;
  usageStatistics: any;
  fetchAIData: () => void;
}

const AIDataContext = createContext<AIDataContextType>({
  insightSummary: null,
  categoryDistribution: null,
  responseTimes: null,
  userSatisfaction: null,
  usageStatistics: null,
  fetchAIData: () => {},
});

interface AIDataProviderProps {
  children: ReactNode;
}

export const AIDataProvider: React.FC<AIDataProviderProps> = ({ children }) => {
  const [insightSummary, setInsightSummary] = useState<any>(null);
  const [categoryDistribution, setCategoryDistribution] = useState<any>(null);
  const [responseTimes, setResponseTimes] = useState<any>(null);
  const [userSatisfaction, setUserSatisfaction] = useState<any>(null);
  const [usageStatistics, setUsageStatistics] = useState<any>(null);
  const [dataFetched, setDataFetched] = useState<boolean>(false); // Add a state to track if data has been fetched

  const fetchAIData = async () => {
    try {
      // Simulating API call or fetching data from JSON file
      const response = await fetch('/data/ai-data.json');
      const data = await response.json();
      setInsightSummary(data.insight_summary);
      setCategoryDistribution(data.category_distribution);
      setResponseTimes(data.response_times);
      setUserSatisfaction(data.user_satisfaction);
      setUsageStatistics(data.usage_statistics);
      setDataFetched(true); // Set dataFetched to true after fetching data
    } catch (error) {
      console.error('Error fetching AI data:', error);
    }
  };

  useEffect(() => {
    if (!dataFetched) { // Only fetch data if it hasn't been fetched before
      fetchAIData();
    }
  }, [dataFetched]); // Run the effect only when dataFetched changes

  return (
    <AIDataContext.Provider
      value={{
        insightSummary,
        categoryDistribution,
        responseTimes,
        userSatisfaction,
        usageStatistics,
        fetchAIData,
      }}
    >
      {children}
    </AIDataContext.Provider>
  );
};

export default AIDataContext;
