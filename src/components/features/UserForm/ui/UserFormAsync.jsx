import { lazy } from 'react';

export const UserFormAsync = lazy(() => import('./UserForm'));

/**
 * обёртка для асинхронного компонента
 */
