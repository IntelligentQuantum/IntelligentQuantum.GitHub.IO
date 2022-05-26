import { NavbarActionTypes } from './navbar.types';

const INITIAL_STATE =
{
    openNavbar: null
}

export const navbarReducer = (state = INITIAL_STATE, action: any) =>
{
    switch (action.type)
    {
        case NavbarActionTypes.SET_OPEN_NAVBAR:
            return {
                ...state,
                openNavbar: action.payload
            }
        default:
            return state;
    }
}
