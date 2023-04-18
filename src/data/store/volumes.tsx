import {v4 as uuid} from "uuid";
import {createSlice} from "@reduxjs/toolkit";

export type UserVolume = {
    username: string
    volume: number
    steam_id: string
}
const initialVolumeState: UserVolume[] = [
    {username: "TBSliver", volume: 50, steam_id: uuid()},
    {username: "donequis", volume: 50, steam_id: uuid()},
]
export const volumeSlice = createSlice({
    name: 'volumes',
    initialState: initialVolumeState,
    reducers: {
        set_volume(state, action) {
            state[action.payload.idx].volume = action.payload.volume
        },
        add_user(state, action) {
            state.push(action.payload)
        }
    }
});