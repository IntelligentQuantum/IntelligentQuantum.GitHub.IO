export function arrayFilter(array: any)
{
    return array.filter((element: any) =>
    {
        return element !== null && element !== '' && element !== '\n';
    });
}

export function capitalizeEachFirstLetter(string: string)
{
    console.log(string)
    const array = string?.split(' ');

    for (let i = 0; i < array.length; i++)
        array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);

    return array.join(' ');
}
