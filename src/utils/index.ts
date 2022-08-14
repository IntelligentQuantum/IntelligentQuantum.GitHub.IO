import {ITheme} from '../interfaces/theme';

export function arrayFilter(array: any)
{
    return array.filter((element: any) =>
    {
        return element !== null && element !== '' && element !== '\n';
    });
}
