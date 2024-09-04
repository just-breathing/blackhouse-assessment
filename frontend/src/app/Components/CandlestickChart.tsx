"use client";
import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChart } from '../redux/chartSlice';
import { RootState } from '../redux/store';
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

type CandlestickData = {
  x: Date;
  y: [number, number, number, number];
};

const ApexChart: React.FC = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state: RootState) => state.chart);

  useEffect(() => {
    dispatch(fetchChart('candlestick') as any);
  }, [dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  if (!data.candlestick) return null;

  const series = [{
    data: data.candlestick?.data?.map ((item: any) => ({
      x: new Date(item.x),
      y: [item.open, item.high, item.low, item.close],
    })) as CandlestickData[],
  }];


  const options: ApexOptions = {
    chart: {
      type: 'candlestick',
      height: 350,
    },
    title: {
      text: 'Candlestick Chart',
      align: 'center',
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
    tooltip: {
      enabled: true,
      style: {
        fontSize: '12px'
      },
      onDatasetHover: {
        highlightDataSeries: true,
      },
      theme: 'dark', // You can choose 'dark' or 'light' theme
    },
  };
  

  return (
      <div id="chart" className='w-{100%} grid bg-white mt-20' >
        <ReactApexChart options={options} series={series} type="candlestick" width={"100%"} height={600} />
    </div>
  );
};

export default ApexChart;
