import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DataStatus, voteState } from "../../types/redux";
import { Ivote } from "../../types/vote";

const initialState: voteState = {
    error: null,
    status: DataStatus.IDLE,
    vote: null
}

export const fetchVote = createAsyncThunk('/votes',
    async (vote : {userId: string, candidateId: string}, thunkApi) => {        
        try {
            const res = await fetch("http://localhost:11223/api/votes", {
                method: "post",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(vote)
            })
            if (!res.ok) {
                thunkApi.rejectWithValue("Can't voted, please try again")
            }
            const data = await res.json()
            // localStorage.setItem("Authorization" ,data.token)
            console.log(data);
            return data
            // thunkApi.fulfillWithValue(data)
        } catch (err) {
            thunkApi.rejectWithValue(err)
        }
    }
)


const voteSlice = createSlice({
    name: "vote",
    initialState,
    reducers: {},
    extraReducers: (builder: ActionReducerMapBuilder<voteState>) => {
      builder.addCase(fetchVote.pending, (state)=>{
          state.status = DataStatus.LOADING
          state.error = null
          state.vote = null
      }).addCase(fetchVote.fulfilled, (state, action)=>{
          state.status = DataStatus.SUCCESS
          state.error = null
          state.vote = action.payload as unknown as Ivote
      }).addCase(fetchVote.rejected, (state, action)=>{
          state.status = DataStatus.FAILED
          state.error = action.error as string
          state.vote = null
      })
    },
  });

  export default voteSlice