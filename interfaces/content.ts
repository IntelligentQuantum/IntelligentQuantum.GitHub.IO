import type { IBlog } from './blog';
import type { IPlan } from './plan';
import type { IFunny } from './funny';
import type { IService } from './service';
import type { IPortfolio } from './portfolio';
import type { IRecommendation } from './recommendation';

export interface IContent
{
    language: string,
    my_name: string,
    my_skills: string[],
    currency: string,
    typing_effect: string[],
    download_cv: string,
    category: string,
    author: string,
    id: string,
    order_now: string,
    source_code: string,
    source: string,
    created_at: string,
    send_message: string,
    explore_more: string,
    read_more: string,
    blog_not_found: string,
    phone: string,
    my_phone: string,
    whatsapp: string,
    telegram: string,
    email: string,
    gmail: string,
    chmail: string,
    my_email: string,
    my_gmail: string,
    my_chmail: string,
    name: string,
    message: string,
    residence: string,
    city: string,
    age: string,
    my_residence: string,
    my_city: string,
    my_age: string,
    english: string,
    persian: string,
    german: string,
    home: string,
    contact: string,
    portfolio: string,
    blogs: string,
    funny: string,
    error:
        {
            title: string,
            description: string
        },
    titles: string[],
    headers: string[],
    categories: string[],
    recommendations: IRecommendation[],
    my_blogs: IBlog[],
    funny_facts: IFunny[],
    plans: IPlan[],
    services: IService[],
    my_portfolio: IPortfolio[]
}
