import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../../../utils/firebase.config';

const initialState = {
  name: '',
  email: '',
  isLoading: true,
  isError: false,
  error: '',
};

export const createUser = createAsyncThunk('userSlice/createUser', async ({ email, password }) => {
  const data = await createUserWithEmailAndPassword(auth, email, password)
  console.log(data);
  return data
})



const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {},
  
});

export default userSlice.reducer;
