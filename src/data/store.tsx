import {configureStore} from '@reduxjs/toolkit';
import {UserVolume, volumeSlice} from "./store/volumes";

export const {set_volume, add_user} = volumeSlice.actions;

export type StoreType = {
    volumes: UserVolume[]
}

export const store = configureStore({
    reducer: {
        volumes: volumeSlice.reducer
    }
});