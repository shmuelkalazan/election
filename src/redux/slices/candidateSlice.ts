import {
    ActionReducerMapBuilder,
    createAsyncThunk,
    createSlice,
  } from "@reduxjs/toolkit";
  import { DataStatus, candidateState } from "../../types/redux";
import { Icandidate } from "../../types/candidate";
  
  
  const initialState: candidateState = {
    error: null,
    status: DataStatus.IDLE,
    candidate: [],
  };
  
  export const fetchCandidates = createAsyncThunk(
    "candidates/getList",
    async (_, thunkApi) => {
      try {
        // const res = await fetch(`https://server-ldfi.onrender.com/api/candidates`,{
        //   headers: {
        //     Authorization: localStorage["Authorization"]!,
        //   },
        // });
        // if (res.status != 200) {
        //   thunkApi.rejectWithValue("Can't get the list, please try again");
        // }
        // const data = await res.json();
        // return data
      } catch (err) {
        thunkApi.rejectWithValue("Can't get the list, please try again");
      }
    }
  );
  

  const candidateSlice = createSlice({
    name: "candidates",
    initialState,
    reducers: {
      vote:(state ,action) => {
        state.candidate.map((e) =>{e._id == action.payload && e.votes ++})
    }  
    },
    extraReducers: (builder: ActionReducerMapBuilder<candidateState>) => {
      builder.addCase(fetchCandidates.pending, (state)=>{
          state.status = DataStatus.LOADING
          state.error = null
          state.candidate = []
      }).addCase(fetchCandidates.fulfilled, (state, action)=>{
          state.status = DataStatus.SUCCESS
          state.error = null
          state.candidate = action.payload as unknown as Icandidate[]
      }).addCase(fetchCandidates.rejected, (state, action)=>{
          state.status = DataStatus.FAILED
          state.error = action.error as string
          state.candidate = []
      })
    },
  });
  
  export default candidateSlice
  