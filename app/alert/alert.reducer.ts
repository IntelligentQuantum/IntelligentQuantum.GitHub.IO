import { AlertActionTypes } from './alert.types';

const INITIAL_STATE =
    {
        statusAlert: null
    }

export const alertReducer = (state = INITIAL_STATE, action: any) =>
{
    switch (action.type)
    {
        case AlertActionTypes.SET_ACTIVE_ALERT:
            return {
                ...state,
                activeAlert: action.payload
            }
        default:
            return state;
    }
}
