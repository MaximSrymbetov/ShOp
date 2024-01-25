/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-return */
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

// export const buildURL = (url: any, params: { [s: string]: unknown } | ArrayLike<unknown>) => {
//   let urlWitchParams = url;

//   Object.entries(params).forEach(([key, value], i) => {
//     const sign = !i ? '?' : '&';
//     urlWitchParams += `${sign}${key}=${value}`;
//   });
//   return urlWitchParams;
// };

// export const apiSlice = createApi({
//   reducerPath: 'api',
//   baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
//   tagTypes: ['Product'],
//   endpoints: (builder) => {
//     getProduct: builder.query({
//       query: ({ params }) => buildURL('/product', params),
//       providesTags: ['Product'],
//     });
//   },
// });

// export const {} = apiSlice