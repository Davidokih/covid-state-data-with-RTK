import { configureStore } from "@reduxjs/toolkit";
import { covidRtk } from "./CovidRTK";

export const store = configureStore({
    reducer: {
        [covidRtk.reducerPath]: covidRtk.reducer
    },
    middleware: (getAllMiddleware)=>getAllMiddleware().concat(covidRtk.middleware)
})