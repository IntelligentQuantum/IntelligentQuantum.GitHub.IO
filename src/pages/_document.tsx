import React from 'react';
import Script from 'next/script';
import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document
{
    static async getInitialProps(ctx: DocumentContext)
    {
        return await Document.getInitialProps(ctx);
    }

    render()
    {
        return (
            <Html lang='en' data-theme='dim' data-language='en' dir='ltr'>
                <Head>
                    <link rel='icon' href='https://parsa-firoozi.ir/static/images/favicon.png'/>
                    <link rel='apple-touch-icon' href='https://parsa-firoozi.ir/static/images/favicon.png'/>
                    <link rel='manifest' href='https://parsa-firoozi.ir/static/manifest.json'/>

                    <meta property='theme-color' content='#5294E2'/>

                    <meta name='language' content='en'/>
                    <meta name='Classification' content='Portfolio'/>
                    <meta name='subject' content='Parsa Firoozi Full-Stack Developer & Graphic Designer'/>
                    <meta name='description' content='Parsa Firoozi Full-Stack Developer & Graphic Designer'/>
                    <meta name='keywords' content='im-parsa, Parsa Firoozi, Parsa, Firoozi, Portfolio, Full-Stack Developer, Graphic Designer'/>
                    <meta name='author' content='im-parsa'/>

                    <meta property='og:type' content='website'/>
                    <meta property='og:url' content='https://parsa-firoozi.ir/'/>
                    <meta property='og:title' content='im-parsa'/>
                    <meta property='og:description' content='Parsa Firoozi Full-Stack Developer & Graphic Designer'/>
                    <meta property='og:image' content='https://parsa-firoozi.ir/static/images/favicon.png'/>

                    <meta property='twitter:card'/>
                    <meta property='twitter:url' content='https://parsa-firoozi.ir/'/>
                    <meta property='twitter:title' content='im-parsa'/>
                    <meta property='twitter:description' content='Parsa Firoozi Full-Stack Developer & Graphic Designer'/>
                    <meta property='twitter:image' content='https://parsa-firoozi.ir/static/images/favicon.png'/>

                    <Script
                        id='gtm-script'
                        strategy='afterInteractive'
                        dangerouslySetInnerHTML={{
                            __html: `
                            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer', 'GTM-${ process.env.GTM_ID }');`
                        }}
                    />
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
