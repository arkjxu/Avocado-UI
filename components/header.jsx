/*
* file: header.jsx
* Description:
*   -> header with logo and avatar/logout
*/

import PropTypes from 'prop-types';
import withSession from "../hoc/withSession";
import styles from "../styles/Header.module.css";

const Header = ({user, onGoogleLogOut}) => {
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

Header.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    email: PropTypes.string,
    verified_email: PropTypes.bool,
    name: PropTypes.string,
    given_name: PropTypes.string,
    family_name: PropTypes.string,
    picture: PropTypes.string,
    locale: PropTypes.string,
  }),
  onGoogleLogOut: PropTypes.func,
}

export default withSession(Header);