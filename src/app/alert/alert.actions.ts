import { AlertActionTypes } from './alert.types';

export const setActiveAlert = (status: boolean, message: string, type: string) =>
    ({
        type: AlertActionTypes.SET_ACTIVE_ALERT,
        payload:
            {
                status,
                message,
                type
            }
    });
