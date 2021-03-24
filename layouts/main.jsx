/*
* file: main.jsx
* Description:
*   -> Main layout
*/

import PropTypes from "prop-types";
import Header from "../components/header";
import DefaultLayout from "./default";

const MainLayout = ({children, oauth2ClientId}) => {
  return (
    <DefaultLayout>
      <div className="main">
          <Header oauth2ClientId={oauth2ClientId}/>
          {children}
      </div>
      <style jsx>
        {`
          .main {
            display: flex;
            flex-flow: column;
            background-color: #fff;
            flex: 1;
          }
        `}
      </style>
    </DefaultLayout>
  );
}

MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.arrayOf(PropTypes.element.isRequired)
  ]),
};

export default MainLayout;