import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { Baseurl } from './Url';

export const LoginApi = createApi({
  reducerPath: 'LoginApi',

  baseQuery: fetchBaseQuery({
    baseUrl: Baseurl,
  }),

  endpoints: builder => ({
    postMethod: builder.mutation({
      query: ({url, data, token}) => {
     
        return {
          url: url,
          method: 'POST',
          body: data,
          headers: token
            ? {
                Authorization: `Bearer ` + `${token}`,
              }
            : {
                Accept: 'application/json',
               
              },
        };
      },
    }),
    getMethod: builder.mutation({
      query: ({url, token}) => {
        return {
          url:url,
          method: 'GET',
          headers:
              token
              ? {
                  Authorization: `Bearer ` + `${token}`,
                }
              :
            {
              Accept: 'application/json',
              'Content-Type': 'multipart/form-data',
              'X-Requested-With': 'XMLHttpRequest',
            },
        };
      },
    }),
  }),
});
export const {usePostMethodMutation, useGetMethodMutation} = LoginApi;

