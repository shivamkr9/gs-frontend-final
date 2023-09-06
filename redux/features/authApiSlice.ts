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
        resetPassword: builder.mutation({
            query: email => ({
                url: '/reset_password/',
                method: 'POST',
                body: { email },
            }),
        }),
        resetPasswordConfirm: builder.mutation({
            query: ({ uid, token, new_password, re_new_password }) => ({
                url: '/reset_password_confirm/',
                method: 'POST',
                body: { uid, token, new_password, re_new_password },
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
    useResetPasswordMutation,
    useResetPasswordConfirmMutation,
} = authApiSlice;
