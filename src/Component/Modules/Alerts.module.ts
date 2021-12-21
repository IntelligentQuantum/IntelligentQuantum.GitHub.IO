export const hideAlert = () =>
{
    const el: any = document.querySelector('.alert');
    if (el) el.parentElement.removeChild(el);
};

export const ShowAlert = (type: string, msg: string) =>
{
    hideAlert();
    const markup: any = `<div dir="rtl" class="alert alert__${type}">${msg}</div>`,
        body: any = document.querySelector('body');

    body.insertAdjacentHTML('afterbegin', markup);
    window.setTimeout(hideAlert, 5000);
};
