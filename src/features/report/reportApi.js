import { apiSlice } from '../api/apiSlice';

export const reportApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getReport: builder.query({
            query: (params) => ({
                url: '/api/v1/report',
                params
            }),
        })
    }),
});

export const {
    useGetReportQuery,
} = reportApi;
