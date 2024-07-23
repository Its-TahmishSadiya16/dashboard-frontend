import React, { useEffect, useState } from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import './App.css';

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const processChartData = (data) => {
    const sectors = data.map(item => item.sector);
    const intensities = data.map(item => item.intensity);
    const likelihoods = data.map(item => item.likelihood);
    const relevances = data.map(item => item.relevance);
    const countries = data.map(item => item.country);

    return {
      labels: sectors,
      datasets: [
        {
          label: 'Intensity',
          data: intensities,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
        },
        {
          label: 'Likelihood',
          data: likelihoods,
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
          borderColor: 'rgba(153, 102, 255, 1)',
        },
        {
          label: 'Relevance',
          data: relevances,
          backgroundColor: 'rgba(255, 159, 64, 0.2)',
          borderColor: 'rgba(255, 159, 64, 1)',
        },
      ],
    };
  };

  const chartData = processChartData(data);

  return (
    <div className="dashboard">
      <h1>Visualization Dashboard</h1>
      <div className="chart-container">
        <Line data={chartData} />
      </div>
      <div className="chart-container">
        <Bar data={chartData} />
      </div>
      <div className="chart-container">
        <Pie data={chartData} />
      </div>
    </div>
  );
};

export default Dashboard;
