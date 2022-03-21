import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import anecdoteService from "../services/anecdotes";

export const fetchAllAnecdotes = createAsyncThunk(
  "anecdotes/fetchAllAnecdotes",
  async () => await anecdoteService.getAll()
);

export const createAnecdote = createAsyncThunk(
  "anecdotes/createAnecdote",
  async (content) => await anecdoteService.create(content)
);

export const updateAnecdote = createAsyncThunk(
  "anecdotes/updateAnecdote",
  async (anecdote) => await anecdoteService.update(anecdote)
);

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllAnecdotes.fulfilled, (state, action) => action.payload)
      .addCase(createAnecdote.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(updateAnecdote.fulfilled, (state, action) => {
        const id = action.payload.id;
        return state.map((a) => (a.id !== id ? a : action.payload));
      });
  },
});

export default anecdoteSlice.reducer;
