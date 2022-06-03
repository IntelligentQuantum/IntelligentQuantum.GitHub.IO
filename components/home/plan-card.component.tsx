import type { IPlan } from '../../contracts/IPlan';
import type { IContent } from '../../contracts/IContent';

import ButtonSecondary from '../buttons/secondary-button.component';

import stylesHome from '../../styles/pages/home.module.scss';

import Check from '../../public/static/icons/icon-check.svg';

const PlanCard = (props: { text: string, content: IContent, plan: IPlan }) =>
{
    return (
        <div className={stylesHome.homePlansContent}>
            <h5>
                {props.plan.title}
            </h5>
            <div>
                {props.plan.price}
                <span>
                    {props?.content?.currency}
                </span>
            </div>
            <ul>
                <li>
                    <Check />
                    <span>
                        {props.plan.a}
                    </span>
                </li>
                <li>
                    <Check />
                    <span>
                        {props.plan.b}
                    </span>
                </li>
                <li>
                    <Check />
                    <span>
                        {props.plan.c}
                    </span>
                </li>
            </ul>
            <ButtonSecondary
                link='/contact'
                text={props.text}
            />
        </div>
    );
};

export default PlanCard;
