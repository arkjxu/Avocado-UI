/*
* file: authorized.jsx
* Description:
*   -> Layout for post authentication
*/

import PropTypes from "prop-types";
import MainLayout from "./main";
import Tabs from "../components/tabs";
import withSession from "../hoc/withSession";
import Loading from "../components/loading";

const AuthorizedLayout = ({children, oauth2ClientId, isLoading}) => {
  if (isLoading) {
    return <Loading/>
  }
  return (
    <MainLayout oauth2ClientId={oauth2ClientId}>
      <div className="authorized">
          <Tabs/>
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
    </MainLayout>
  );
}

AuthorizedLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default withSession(AuthorizedLayout);