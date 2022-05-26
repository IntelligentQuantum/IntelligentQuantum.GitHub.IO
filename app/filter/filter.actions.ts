import { FilterActionTypes } from './filter.types';

export const setActiveFilter = (status: any) =>
({
    type: FilterActionTypes.SET_ACTIVE_FILTER,
    payload: status
});
