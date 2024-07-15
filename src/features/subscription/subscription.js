import { apiSlice } from '../api/apiSlice';

export const stripeApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createCheckoutSession: builder.mutation({
            query: () => ({
                url: '/api/v1/create-checkout-session',
                method: 'POST',
            }),
        }),

    }),
});

export const { useCreateCheckoutSessionMutation } = stripeApi;
