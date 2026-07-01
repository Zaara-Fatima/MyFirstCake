import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await fetch("/api/cakes"); // Replace with your API endpoint
  return response.json();
});

const initialState = {
  items: [],
  status: "idle",
  error: null,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost(state, action) {
      state.items.push(action.payload);
    },
    removePost(state, action) {
      state.items = state.items.filter((post) => post.id !== action.payload);
    },
    updatePost: (state, action) => {
      const { id, title, description } = action.payload;
      const existingPost = state.items.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.description = description;
      }
    },
  },
  extraReducers: (builder)=>{
    builder
    .addCase(fetchPosts.pending, (state)=>{
        state.status ="loading";
    })
    .addCase(fetchPosts.fulfilled,(state,action)=>{
        state.status="successfull";
        state.items=action.payload;
    })
    .addCase(fetchPosts.rejected,(state,action)=>{
        state.status="failed";
        state.error=action.error.message;
    })
  }
}
);

export const {addPost,deletePost,updatePost}=postSlice.actions

export default postSlice.reducer
