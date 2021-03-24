const fetch = require("node-fetch");

export default async function handler(req, res) {
  const activate = await fetch("http://ec2-34-222-26-195.us-west-2.compute.amazonaws.com:8080/session/activate", {
    method: "GET",
    headers: req.headers,
  });
  if (activate.status === 200) {
    const loggedInUser = await activate.json()
    res.json(loggedInUser)
  } else {
    res.status(401).end()
  }
}