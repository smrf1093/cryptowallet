import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface DataState {
  data: Record<string, any[]>;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

// Mock data
const initialData: Record<string, any[]> = {
  Featured: [{ id: '1-1', title: 'Lido Staking', description: 'The Lido Ethereum Liquid Staking Protocol built on E.', icon: 'https://via.placeholder.com/40' }, { id: '1-2', title: 'Eigen Layer', description: 'Eigen Layer is a protocol built on Ethereum that intro...', icon: 'https://via.placeholder.com/40' }, { id: '1-3', title: 'Eigen Layer', description: 'Eigen Layer is a protocol built on Ethereum that intro...', icon: 'https://via.placeholder.com/40' }, { id: '1-4', title: 'Eigen Layer', description: 'Eigen Layer is a protocol built on Ethereum that intro...', icon: 'https://via.placeholder.com/40' }, { id: '1-5', title: 'Eigen Layer', description: 'Eigen Layer is a protocol built on Ethereum that intro...', icon: 'https://via.placeholder.com/40' }, { id: '1-6', title: 'Eigen Layer', description: 'Eigen Layer is a protocol built on Ethereum that intro...', icon: 'https://via.placeholder.com/40' }],
  DEX: [{ id: '2-1', title: 'DEX Item 1', description: 'Description 2', icon: 'https://via.placeholder.com/40' }],
  Lending: [{ id: '3-1', title: 'Lending Item 1', description: 'Description 3', icon: 'https://via.placeholder.com/40' }],
  Yield: [{ id: '4-1', title: 'Yield Item 1', description: 'Description 4', icon: 'https://via.placeholder.com/40' }],
  BSC: [{ id: '5-1', title: 'BSC Item 1', description: 'Description 5', icon: 'https://via.placeholder.com/40' }],
};

// Simulated async action to fetch data
export const fetchData = createAsyncThunk('data/fetchData', async () => {
  // Simulated API call (replace with actual fetch call)
  // const response = await fetch('YOUR_API_ENDPOINT');
  // const data = await response.json();
  
  // Simulated delay
  // await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Simulated return data (replace with actual fetched data)
  return initialData;
});

const initialState: DataState = {
  data: {},
  status: 'idle',
  error: null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action: PayloadAction<Record<string, any[]>>) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action: PayloadAction<string | any>) => {
        state.status = 'failed';
        state.error = action.payload || 'Something went wrong';
      });
  },
});

export default dataSlice.reducer;
