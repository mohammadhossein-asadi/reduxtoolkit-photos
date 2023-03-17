import { createSlice } from "@reduxjs/toolkit";

const photoSlice = createSlice({
  name: "photos",
  initialState: {
    photos: [
      {
        title: "Mountain Landscape",
        src: "https://images.unsplash.com/photo-1611080402167-ed75bae6df32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW4lMjBsYW5kc2NhcGV8ZW58MHx8MHx8&w=1000&q=80",
      },
      {
        title: "New Zealand Mountains",
        src: "https://img.theculturetrip.com/wp-content/uploads/2016/04/mitre-peak-new-zealand.jpg",
      },
      {
        title: "Nature Trail",
        src: "https://www.pigeonforge.com/wp-content/uploads/elkmont-autumn-fall-1.jpg",
      },
      {
        title: "Tropical Beach",
        src: "https://img.freepik.com/free-photo/beautiful-tropical-beach-sea-with-coconut-palm-tree-paradise-island_74190-2206.jpg?w=2000",
      },
      {
        title: "Forest Hiking",
        src: "https://hips.hearstapps.com/amv-prod-gp.s3.amazonaws.com/gearpatrol/wp-content/uploads/2016/06/best-day-hikes-gear-patrol-full-lead-1440.jpg",
      },
    ],
    selectedPhoto: null,
  },
  reducers: {
    selectPhoto(state, action) {
      state.selectedPhoto = action.payload;
    },
  },
});

export const { selectPhoto } = photoSlice.actions;

export default photoSlice.reducer;
