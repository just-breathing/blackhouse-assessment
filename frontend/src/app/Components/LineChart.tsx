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
    dispatch(fetchChart('line') as any);
  }, [dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  if (!data.line) return null;

  const chartData = {
    series: [{
      name: 'Value',
      data: data.line?.data,
    }],
    options: {
      chart: {
        height: 450,
        type: 'line',
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: 'center', // top, center, bottom
            hideOverflowingLabels: true,
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + " ";
        },
        offsetY: 5,
        style: {
          fontSize: '12px',
          colors: ["#304758"]
        },
      },
      xaxis: {
        categories: data.line.labels,
        position: 'bottom',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            }
          }
        },
        
        tooltip: {
          enabled: true,
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: true,
          formatter: function (val) {
            return val + "";
          }
        }
      },
      title: {
        text: 'Line Chart',
        floating: true,
        offsetY: 0,
        align: 'center',
        style: {
          color: '#444'
        }
      },
      tooltip: {
        theme: 'dark',
        style: {
          fontSize: '12px'
        }
      }
    } as ApexOptions
  };

  return (
  <div className='w-full bg-white mt-20' >
  <ReactApexChart options={chartData.options}   width={"100%"} height={400}  series={chartData.series.filter(series => series.data !== null).map(series => ({ ...series, data: series.data as (number | null)[] }))}

  type="line"  />
  </div>

);

};

export default BarChart;
