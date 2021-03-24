import MainLayout from "../layouts/main";
import Footer from "../components/footer";
import withSession from "../hoc/withSession";
import { GoogleLogin } from "react-google-login";
import Loading from "../components/loading";
import styles from "../styles/Login.module.css";

export async function getStaticProps(context) {
  return {
    props: {
      oauth2ClientId: process.env.clientId,
    }
  }
}

const LoginPage = ({user, isLoading, oauth2ClientId, onGoogleLogin}) => {
  if (isLoading) {
    return <Loading/>
  }
  return (
    <>
      <MainLayout>
        <div className={styles.joinus}>
          <div className={styles.content}>
            <div className={styles.jointitle}>
              <h1 className={styles.slogan}>
                This is Avocado.
              </h1>
              <p className={styles.description}>
                A tool to simplify the way to track all your assets and liabilities, so you
                can spend your valuable time elsewhere.
              </p>
            </div>
            <div className={styles.cards}>
              <div className={[styles.card, styles.card1].join(" ")}>
                <div className={styles.cardtitle}>
                  <img className={styles.icons} src="/coffee.svg" alt="free" />
                  <h4>Free</h4>
                </div>
                <p className={styles.info}>
                  Monitoring your own finances shouldn't cost you a cent.
                  Starting tracking your own assets & liabilities now at no
                  cost.
                </p>
              </div>
              <div className={styles.seperator}></div>
              <div className={[styles.card, styles.card2].join(" ")}>
                <div className={styles.cardtitle}>
                  <img
                    className={styles.icons}
                    src="/table.svg"
                    alt="organize"
                  />
                  <h4>Organized</h4>
                </div>
                <p className={styles.info}>
                  Keep track of all your assets and liabilities in a well
                  organized view to allow better monitoring so you can spend
                  less time keeping your finances in a good shape.
                </p>
              </div>
              <div className={styles.seperator}></div>
              <div className={[styles.card, styles.card3].join(" ")}>
                <div className={styles.cardtitle}>
                  <img
                    className={styles.icons}
                    src="/platform.svg"
                    alt="organize"
                  />
                  <h4>Convenient</h4>
                </div>
                <p className={styles.info}>
                  All your assets and liabilities within a single web page, so
                  ditch the pen and paper now and start tracking anywhere,
                  anytime.
                </p>
              </div>
            </div>
            <GoogleLogin
              clientId={oauth2ClientId}
              onSuccess={onGoogleLogin}
              className={styles.googlelogin}
              buttonText="Use Avocado for Free with Google"
              cookiePolicy="single_host_origin"
              responseType="code"
              accessType="offline"
            />
          </div>
        </div>
      </MainLayout>
      <Footer />
      <style jsx global>{`
        html, body, #__next {
          min-height: 100vh;
        }
        #__next, #__next > div:first-of-type {
          display: flex;  
        }

        #__next {
          flex-flow: column;
        }
        
        #__next > div:first-of-type {
          flex: 1;
        }
      `}</style>
    </>
  );
};

export default withSession(LoginPage);
