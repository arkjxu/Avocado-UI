/*
* file: header.jsx
* Description:
*   -> header with logo and avatar/logout
*/

import withSession from "../hoc/withSession";
import { GoogleLogout } from 'react-google-login';
import styles from "../styles/Header.module.css";

const Header = ({user, onGoogleLogOut, oauth2ClientId}) => {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <img className={styles.avocadoimg} src="/avocado.svg" alt="avocado"/>
        <h4>Avocado</h4>
      </div>
      {user && <div
        className={styles.usercontainer}>
        <span className={styles.logoutbtn} onClick={onGoogleLogOut}>Logout</span>
        <img className={[styles.user, styles.avatar].join(" ")} src={user.picture} alt={user.name}/>
      </div> }
    </div>
  );
}

export default withSession(Header);