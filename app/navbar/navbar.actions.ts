import { NavbarActionTypes } from './navbar.types';

export const setOpenNavbar = (status: any) =>
({
    type: NavbarActionTypes.SET_OPEN_NAVBAR,
    payload: status
});
