"use client";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChart } from '../redux/chartSlice';
import { RootState } from '../redux/store';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

const BarChart: React.FC = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state: RootState) => state.chart);

  useEffect(() => {
    dispatch(fetchChart('pie') as any);
  }, [dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  if (!data.pie) return null;

  console.log(`Pie chart data:`, data);

  const chartData = {
    series: [data.pie?.data || []],
    options: {
      chart: {
        type: 'donut',
      },

      labels: data.pie?.labels || [],
      colors: data.pie?.labels?.map(label => {
        switch (label) {
          case 'Red':
            return '#FF0000';
          case 'Yellow':
            return '#FFFF00';
          case 'Blue':
            return '#0000FF';
          default:
            return '#000000';
        }
        
      }) || [],

      title: {
        text: 'Pie Chart (Donut)',
        align: 'center',
      },
      tooltip: {
        enabled: true,
      },

      responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
    } as ApexOptions,
  };

  return (
  <div className='w-full bg-white mt-20' >
  <ReactApexChart options={chartData.options}   width={"100%"} height={400}  series={chartData.series.flat() as number[]}
  type="donut"  />
  </div>

);

};

export default BarChart;
