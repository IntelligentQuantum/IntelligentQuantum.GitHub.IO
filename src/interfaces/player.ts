export interface IPlayer
{
    id: string,
    name: string,
    last_name: string,
    shirt_number: string,
    profile: string,
    stats:
        {
            games: string,
            goals: string,
            assists: string
        },
    info:
        {
            height: string,
            position: string
        }
}
