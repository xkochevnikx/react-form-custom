import { formApi } from '../../../shared/api/rtkApi';

const usersFormApi = formApi.injectEndpoints({
    endpoints: (build) => ({
        postUsersForm: build.mutation({
            query: (body) => ({
                url: '/users',
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const { usePostUsersFormMutation } = usersFormApi;
