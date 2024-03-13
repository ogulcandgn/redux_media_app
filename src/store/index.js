import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";
//*react query api
import { setupListeners } from "@reduxjs/toolkit/query";
import { albumsApi } from "./apis/albumsApi";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    albums: albumsApi.reducer,
  },
});

//*bu dosyadan gelen her seyi dısarı aktar
export * from "./thunks/fetchUsers";
export * from "./thunks/addUsers";
export * from "./thunks/removeUsers";
