import { apiSlice } from '../services/apiSlice';

interface User {
    first_name: string;
    last_name: string;
    email: string;
}


const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        retrieveUser: builder.query<User, void>({
            query: () => '/',
        }),
        login: builder.mutation({
            query: ({ mobile, password }) => ({
                url: '/login/',
                method: 'POST',
                body: { mobile, password },
            }),
        }),
        register: builder.mutation({
            query: ({
                name,
                mobile,
                email,
                password,
                password2,
            }) => ({
                url: '/create/',
                method: 'POST',
                body: { name, mobile, email, password, password2 },
            }),
        }),
        verify: builder.mutation({
            query: () => ({
                url: '/token/verify/',
                method: 'POST',
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: '/logout/',
                method: 'POST',
            }),
        }),
    }),
});

export const {
    useRetrieveUserQuery,
    useLoginMutation,
    useRegisterMutation,
    useVerifyMutation,
    useLogoutMutation,
} = authApiSlice;
