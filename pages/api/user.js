import fetch from "node-fetch";
import url from "url";
import cookie from "cookie";

export default async function handler(req, res) {
  const queries = url.parse(req.url, true).query;
  if (!queries["code"]) {
    res.status(401).end();
  } else {
    const loginReq = await fetch("http://ec2-34-222-26-195.us-west-2.compute.amazonaws.com:8080/user/authorize?code=" + queries["code"], {
      method: "POST",
      headers: req.headers,
      body: req.body,
    });
    if (loginReq.status === 200) {
      const cookies = cookie.parse(loginReq.headers.get("set-cookie"));
      const loggedInUser = await loginReq.json();
      res.setHeader("Set-Cookie", [
        cookie.serialize("_session_", cookies["_session_"], {httpOnly: true}),
        cookie.serialize("_userId_", decodeURIComponent(loggedInUser.email), {httpOnly: true})]);
      res.json(loggedInUser);
    } else {
      res.status(loginReq.status).end();
    }
  }
}