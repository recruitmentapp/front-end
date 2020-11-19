import { atom } from "recoil";



export const jobState = atom({
    key:'jobs',
    default: {}
})

export const loadingState = atom({
    key:'loading',
    default: true
})