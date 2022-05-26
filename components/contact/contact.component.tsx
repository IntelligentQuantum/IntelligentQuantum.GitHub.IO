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
                                        <span>{props?.content?.my_residence}</span>
                                    </li>
                                    <li>
                                        <h6>{props?.content?.city}:</h6>
                                        <span>{props?.content?.my_city}</span>
                                    </li>
                                    <li>
                                        <h6>{props?.content?.age}:</h6>
                                        <span>{props?.content?.my_age}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='contact__information--content'>
                            <div className='contact__information--content__personal'>
                                <ul>
                                    <li>
                                        <h6>{props?.content?.email}:</h6>
                                        <span>{props?.content?.my_email}</span>
                                    </li>
                                    <li>
                                        <h6>{props?.content?.gmail}:</h6>
                                        <span>{props?.content?.my_gmail}</span>
                                    </li>
                                    <li>
                                        <h6>{props?.content?.chmail}:</h6>
                                        <span>{props?.content?.my_chmail}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='contact__information--content'>
                            <div className='contact__information--content__personal'>
                                <ul>
                                    <li>
                                        <h6>{props?.content?.phone}:</h6>
                                        <span>{props?.content?.my_phone}</span>
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
                                    <button onClick={() => {  }} className='button align-self-start'>{props?.content?.send_message}</button>
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
