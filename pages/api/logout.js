import fetch from "node-fetch";
import url from "url";
import cookie from "cookie";

export default async function handler(req, res) {
  const logoutReq = await fetch("http://ec2-34-222-26-195.us-west-2.compute.amazonaws.com:8080/session/logout", {
    method: "POST",
    headers: req.headers,
    body: req.body,
  });
  if (logoutReq.status === 200) {
    res.setHeader("Set-Cookie", [
      cookie.serialize("_session_", "", {httpOnly: true, maxAge: 0}),
      cookie.serialize("_userId_", "", {httpOnly: true, maxAge: 0})]);
    res.status(200).end();
  } else {
    res.status(loginReq.status).end();
  }
}