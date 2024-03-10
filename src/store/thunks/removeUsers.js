import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removeUsers = createAsyncThunk("users/remove", async (user) => {
  const response = await axios.delete(`http://localhost:3005/users/${user.id}`);
  return response.data;
});

export { removeUsers };
