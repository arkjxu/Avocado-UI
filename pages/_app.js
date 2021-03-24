import {Provider} from 'react-redux';
import App from 'next/app';
import SessionContext from "../contexts/session";
import { wrapper } from '../store/store';
import "../styles/globals.css";

const Avocado = ({ Component, pageProps }) => {
  return (
    <SessionContext.Provider>
      <Component {...pageProps} />
    </SessionContext.Provider>
  )
}

export default wrapper.withRedux(Avocado);
