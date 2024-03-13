import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const albumsApi = createApi({
  //* albums key'i herhangi bir şey olabilir, burada diğer yazılımcılara anlamlı gelmesi için albums key'ini olusturduk
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:3005" }),
  endpoints: (builder) => {
    fetchAlbums: builder.query({
      query: (user) => {
        return {
          url: "/albums",
          params: {
            userId: user.id,
          },
          method: "GET",
        };
      },
    });
  },
});

export const { useFetchAlbumsQuery } = albumsApi;
export { albumsApi };
