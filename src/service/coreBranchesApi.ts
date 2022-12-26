import { HYDRATE } from "next-redux-wrapper";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const coreBranchesApi = createApi({
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_CORE_BASE_URL}`,
  }),
  endpoints: () => ({}),
});
