import { AsideActionTypes } from './aside.types';

export const setOpenAside = (status: any) =>
    ({
        type: AsideActionTypes.SET_OPEN_ASIDE,
        payload: status
    });
