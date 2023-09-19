import { formApi } from '../../../../shared/api/formApi';

/**
 * асинхронный эндпоинт отправки данных на сервер монтируется с помощью injectEndpoints
 * @usePostUsersFormMutation - возвращаемый хук наружу в тело компонента
 */

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
