import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

//*bu dosyadan gelen her seyi dısarı aktar
export * from "./thunks/fetchUsers";
export * from "./thunks/addUsers";
export * from "./thunks/removeUsers";
