/*
* file: session.jsx
* Description:
*   -> Session context for the current user session
*/

import PropTypes from "prop-types";
import fetchJson from "../lib/fetchJson";
import Router from "next/router";
import { createContext, useEffect } from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setLoading } from "../store/commonActions";
import { setUser, logOut } from "../store/userActions"; 
import { validateSession } from "../lib/session";
import { toast } from "react-toastify";

export const SessionContext = createContext();

const Provider = (props) => {
  if (process.browser && !props.user.user && Router.route !== "/login") {
    Router.push("/login");
  }
  if (process.browser && props.user.user && Router.route !== "/summary") {
    Router.push("/summary");
  }
  const values={
    user: props.user.user,
    balances: props.balance.balances,
    isLoading: props.common.isLoading,
    onGoogleLogin: async (res) => {
      props.setLoading(true)
      try {
        const user = await fetchJson("https://fcavocado.herokuapp.com/user/authorize?code=" + res.code, { 
          method: "POST",
          mode: "cors",
        })
        if (!!user && !user.error) {
          props.setUser(user);
        } else {
          toast.error("Uh-oh, can't seem to log in you, please clear cache and try again.");
        }
      } catch(e) {
        toast.error("Uh-oh, something bad happened, please check the logs.");
        console.error(e);
      }
      props.setLoading(false)
    },
    onGoogleLogOut: () => {
      props.logOut();
    },
  }
  useEffect(async () => {
    if (!props.user.user) {
      props.setLoading(true);
      try {
        const user = await validateSession();
        if (!!user && !user.error) {
          props.setUser(user);
        }
      } catch(e) {
        console.error(e);
      }
      props.setLoading(false);
    }
  }, []);
  return (
    <SessionContext.Provider value={values}>
      {props.children}
    </SessionContext.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: bindActionCreators(setUser, dispatch),
    setLoading: bindActionCreators(setLoading, dispatch),
    logOut: bindActionCreators(logOut, dispatch)
  }
}

export default {Provider: connect(state=>state, mapDispatchToProps)(Provider), Consumer: SessionContext.Consumer};