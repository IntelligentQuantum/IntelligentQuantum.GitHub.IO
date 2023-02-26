import { createSlice } from '@reduxjs/toolkit';

const initialState =
    {
        aside: false,
        filter: false,
        navbar: false,
        project:
            {
                tag: undefined,
                popup:
                    {
                        open: false,
                        image: undefined,
                        title: undefined
                    }
            }
    };

const authSlice = createSlice(
    {
        name: 'layout',
        initialState,
        reducers:
            {
                toggleAside(state, action)
                {
                    state.aside = action.payload;
                },
                toggleFilter(state, action)
                {
                    state.filter = action.payload;
                },
                toggleNavbar(state, action)
                {
                    state.navbar = action.payload;
                },
                projectTag(state, action)
                {
                    state.project.tag = action.payload;
                },
                projectPopup(state, action)
                {
                    state.project.popup = action.payload;
                }
            }
    });

export const { toggleAside } = authSlice.actions;
export const { toggleFilter } = authSlice.actions;
export const { toggleNavbar } = authSlice.actions;
export const { projectTag } = authSlice.actions;
export const { projectPopup } = authSlice.actions;

export default authSlice.reducer;
