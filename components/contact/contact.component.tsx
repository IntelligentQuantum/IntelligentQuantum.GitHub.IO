const Contact = (props: any) =>
{
    return (
        <>
            <div className='main__content'>
                <div className='main__background'/>
                <div className='hr'/>
                <section className='contact'>
                    <h4 className='heading'>{props?.content?.titles[3]}</h4>
                    <div className='contact__information'>
                        <div className='contact__information--content'>
                            <div className='contact__information--content__personal'>
                                <ul>
                                    <li>
                                        <h6>{props?.content?.residence}:</h6>
                                        <span>{props?.content?.myResidence}</span>
                                    </li>
                                    <li>
                                        <h6>{props?.content?.city}:</h6>
                                        <span>{props?.content?.myCity}</span>
                                    </li>
                                    <li>
                                        <h6>{props?.content?.age}:</h6>
                                        <span>{props?.content?.myAge}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='contact__information--content'>
                            <div className='contact__information--content__personal'>
                                <ul>
                                    <li>
                                        <h6>{props?.content?.email}:</h6>
                                        <span>{props?.content?.myEmail}</span>
                                    </li>
                                    <li>
                                        <h6>{props?.content?.gmail}:</h6>
                                        <span>{props?.content?.myGmail}</span>
                                    </li>
                                    <li>
                                        <h6>{props?.content?.chmail}:</h6>
                                        <span>{props?.content?.myChmail}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='contact__information--content'>
                            <div className='contact__information--content__personal'>
                                <ul>
                                    <li>
                                        <h6>{props?.content?.phone}:</h6>
                                        <span>{props?.content?.myPhone}</span>
                                    </li>
                                    <li>
                                        <h6>{props?.content?.whatsapp}:</h6>
                                        <span>+</span>
                                    </li>
                                    <li>
                                        <h6>{props?.content?.telegram}:</h6>
                                        <span>+</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <h4 className='heading'>{props?.content?.titles[4]}</h4>
                    <div className='contact__in-touch--parent'>
                        <div className='contact__in-touch'>
                            <form>
                                <div className='contact__in-touch--form__group input'>
                                    <input id='name' name='name' type='text' placeholder={props?.content?.name} required={true}/>
                                    <label htmlFor='name'><i className='bi-person'/></label>
                                </div>
                                <div className='contact__in-touch--form__group input'>
                                    <input id='email' name='email' type='email' placeholder={props?.content?.email} required={true}/>
                                    <label htmlFor='email'><i className='bi-envelope'/></label>
                                </div>
                                <div className='contact__in-touch--form__group message input'>
                                    <textarea id='message' name='message' placeholder={props?.content?.message} required={true}/>
                                    <label htmlFor='message'><i className='bi-text-paragraph'/></label>
                                </div>
                                <div className='contact__in-touch--form__group'>
                                    <button onClick={() => {  }} className='button align-self-start'>{props?.content?.sendMessage}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                <div className='hr'/>
            </div>
        </>
    );
};

export default Contact;
