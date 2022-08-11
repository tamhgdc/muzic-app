import { createSlice } from "@reduxjs/toolkit";

const controlSlice = createSlice({
  name: "control",
  initialState: {
    listSongs: [],
    isPlay: false,
    index: 0,
    selectSong: "",
  },
  reducers: {
    setListSongs: (state, action) => ({
      ...state,
      listSongs: action.payload,
    }),
    setIsPlay: (state, action) => ({
      ...state,
      isPlay: action.payload,
    }),
    setSelectSong: (state, action) => ({
      ...state,
      selectSong: action.payload,
    }),
    setIndex: (state, action) => ({
      ...state,
      index: action.payload,
    }),
    choseSong() {},
  },
});

export const { setListSongs, setIsPlay, choseSong, setIndex, setSelectSong } =
  controlSlice.actions;
export default controlSlice.reducer;
