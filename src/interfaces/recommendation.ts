export interface IRecommendation
{
    id: number,
    author:
        {
            name: string,
            profile: string,
            description: string
        },
    message: string,
    rate: number
}
