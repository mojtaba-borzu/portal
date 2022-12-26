//libraries
import "@reduxjs/toolkit";

//base api call
import { coreBranchesApi } from "../coreBranchesApi";

//types
import { TestResponseInterface } from "./dashboardType";

const apiWithTag = coreBranchesApi.enhanceEndpoints({ addTagTypes: [""] });
export const dashboardApi = apiWithTag.injectEndpoints({
  endpoints: (build) => ({
    postTest: build.mutation<number, TestResponseInterface>({
      query(body) {
        return {
          url: `/test`,
          method: "POST",
          body: body,
        };
      },
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        await queryFulfilled
          .then((res) => {
            console.log(res);
          })
          .catch(() => {
            console.log(arg);
            arg;
          });
      },
    }),
  }),
});

export const { usePostTestMutation } = dashboardApi;
