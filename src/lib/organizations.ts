import axios from 'axios';

import type { IOrganization } from '../interfaces/organization';

export class OrganizationService
{
    public async GET()
    {
        try
        {
            const { data } = await axios.get(
                'https://api.github.com/users/im-parsa/orgs',
                {
                    headers:
                        {
                            Authorization: `token ${ process.env.GITHUB_ACCESS_TOKEN }`
                        }
                });

            return {
                items:
                    [
                        ...data
                            .filter((organization: IOrganization) =>
                            {
                                return organization?.login !== 'HAGH-Team';
                            })
                    ]
            };
        }
        catch (error)
        {
            console.log(error);

            return { status: 'fail', statusCode: 500, message: 'Internal error' };
        }
    }
}

export default OrganizationService;
