/*
* file: withSession.jsx
* Description:
*   -> Pass session props to component
*/

import { useContext } from 'react';
import { SessionContext } from '../contexts/session';

const withSession = (Component) => (props) => {
  const sessionProps = useContext(SessionContext);
  return (
    <Component 
      {...props}
      {...sessionProps} />);
};

export default withSession;
