// import React from 'react';
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

// ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

// const ActivityChart = () => {
//   const data = {
//     labels: Array.from({ length: 27 }, (_, i) => i + 1), // Labels from 1 to 27
//     datasets: [
//       {
//         label: 'Activity',
//         data: [3000, 5000, 4000, 7000, 10000, 3000, 5000, 4000, 7000, 10000, 3000, 5000, 4000, 7000, 10000, 3000, 5000, 4000, 7000, 11000, 3000, 5000, 4000, 7000, 10000, 5000, 4000],
//         backgroundColor: 'rgba(54, 162, 235, 0.6)',
//         borderColor: 'rgba(54, 162, 235, 1)',
//         borderWidth: 1,
//         borderRadius: 10,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         display: false,
//       },
//       tooltip: {
//         mode: 'index',
//         intersect: false,
//       },
//     },
//     scales: {
//       x: {
//         grid: {
//           display: false,
//         },
//       },
//       y: {
//         grid: {
//           borderDash: [2],
//           borderColor: '#4c4c4c',
//         },
//         ticks: {
//           beginAtZero: true,
//         },
//       },
//     },
//   };

//   return (
//     <div className="card bg-dark text-white">
//       <div className="card-body">
//         <div className="d-flex justify-content-between align-items-center">
//           <h5 className="card-title">Activity</h5>
//           <button type="button" className="btn btn-outline-light btn-sm">Weekly</button>
//         </div>
//         <div style={{ height: '150px' }}>
//           <Bar data={data} options={options} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ActivityChart;
import React from 'react';
import { Bar } from 'react-chartjs-2';
import './ActivityChart.css'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const ActivityChart = () => {
  const data = {
    labels: Array.from({ length: 27 }, (_, i) => i + 1), // Labels from 1 to 27
    datasets: [
      {
        label: 'Activity',
        data: [3000, 5000, 4000, 7000, 10000, 3000, 5000, 4000, 7000, 10000, 3000, 5000, 4000, 7000, 10000, 3000, 5000, 4000, 7000, 11000, 3000, 5000, 4000, 7000, 10000, 5000, 4000],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        borderRadius: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          borderDash: [2],
          borderColor: '#4c4c4c',
        },
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <div className="card bg-dark text-white">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="card-title">Activity</h5>
          <button type="button" className="btn btn-outline-light btn-sm">Weekly</button>
        </div>
        <div className="chart-container">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default ActivityChart;
