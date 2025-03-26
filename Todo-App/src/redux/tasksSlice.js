import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch weather data
export const fetchWeather = createAsyncThunk("tasks/fetchWeather", async () => {
  const API_KEY = "4b0a65c3f395ff326cab1c97af744b96"; // Replace with a real API key
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=New York&units=metric&appid=${API_KEY}`
  );
  return response.data;
});

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    weather: null,
    status: "idle",
    error: null,
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.weather = action.payload;
      })
      .addCase(fetchWeather.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { addTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
