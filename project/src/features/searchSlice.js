import { createSlice } from "@reduxjs/toolkit";

// ye sara kaam sear bar ke liye h ki kya kya hoga
const searchSlice = createSlice({
  name: "saerch",
  initialState: {
    query: "",
    activeTab: "photos",
    results: [],
    loading: false,
    error: null,
  },
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
    setActiveTabs(state, action) {
      state.activeTab = action.payload;
    },
    setLoading(state, action) {
      state.loading = true;
      state.error = null;
    },
    setResults(state, action) {
      state.results = action.payload;
      state.loading = false;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    clearResults(state) {
      state.results = [];
    },
  },
});

export const {
  setQuery,
  setActiveTabs,
  setLoading,
  setResults,
  setError,
  clearResults,
} = searchSlice.actions;
export default searchSlice.reducer;
