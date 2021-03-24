/*
* file: default.jsx
* Description:
*   -> default layout
*/

import Head from "next/head";
import PropTypes from "prop-types";

const DefaultLayout = ({oauth2ClientId, children}) => {
    return (
        <div>
            <Head>
                <title>Avocado - Keep your Assets Healthy</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" key="viewport"/>
                <meta name="description" content="Avocado helps you keep track of your assets"/>
                <meta name="keywords" content="avocado, finance, asset, money, liability, life"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/> 
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;500;900&display=swap" rel="stylesheet"/>
            </Head>
            {children}
        </div>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element.isRequired),
};

export default DefaultLayout;