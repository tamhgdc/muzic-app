import { createSlice } from "@reduxjs/toolkit";

const musicSlice = createSlice({
  name: "musics",
  initialState: {
    loading: false,
    songsData: [],
    listSongs: [],
    url: "",
  },
  reducers: {
    setSongs: (state, action) => ({
      ...state,
      songsData: action.payload,
    }),
    setListSongs: (state, action) => ({
      ...state,
      listSongs: action.payload,
    }),
    setSongsUrl: (state, action) => ({
      ...state,
      url: action.payload,
    }),
    getSongs() {},
    setLoading: (state, action) => ({
      ...state,
      loading: action.payload,
    }),
  },
});

export const { setLoading, getSongs, setSongs, setListSongs, setSongsUrl } =
  musicSlice.actions;
export default musicSlice.reducer;
