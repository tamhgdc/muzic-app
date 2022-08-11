import { combineReducers } from "@reduxjs/toolkit";
import controlSlice from "saga/controlSlice";
import musicSlice from "../saga/musicSlice";

export const reducers = combineReducers({
  musics: musicSlice,
  control: controlSlice,
});
