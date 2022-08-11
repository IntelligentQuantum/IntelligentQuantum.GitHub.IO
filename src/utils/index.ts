export function arrayFilter(array: any)
{
    return array.filter((element: any) =>
    {
        return element?.length >= 3;
    });
}
