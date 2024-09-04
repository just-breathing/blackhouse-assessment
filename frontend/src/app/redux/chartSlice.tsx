// /store/slices/chartSlice.ts
"use client";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface ChartData {
  labels: string[]|null;
  data: number[]|null;
}

interface ChartState {
  data: {
    candlestick: ChartData | null;
    line: ChartData | null;
    bar: ChartData | null;
    pie: ChartData | null;
  };
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

type ChartType = 'candlestick' | 'line' | 'bar' | 'pie';

const initialState: ChartState = {
  data: {
    candlestick: null,
    line: null,
    bar: null,
    pie: null,
  },
  status: 'idle',
  error: null,
};

export const fetchChart = createAsyncThunk<ChartData, ChartType>(
  'charts/fetchChart',
  async (chartType: ChartType) => {
    try {
      const url = `${process.env.URL}/${chartType}-chart-data`;
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        // mode: 'no-cors',
        next: { revalidate: 0 },
      });

  
      if (!response.ok) {
        const error = new Error(`${response.status} ${response.statusText}`);
        throw error;
      }
  
      const data = await response.json();
      
      return data;
    } catch (error) {
      console.error(`Error fetching ${chartType} data:`, error);
      throw error;
    }
  }
);

const chartSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchChart.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data[action.meta.arg] = action.payload; 
      })
      .addCase(fetchChart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch chart data';
      });
  },
});

export type ChartSliceReducer = typeof chartSlice.reducer;

export default chartSlice.reducer;
