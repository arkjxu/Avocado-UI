const fetch = require("node-fetch");

export default async function handler(req, res) {
  let originBody = null;
  if (req.method === "DELETE") {
    originBody = JSON.stringify(req.body);
  } else if (req.method === "PUT" || req.method === "POST") {
    originBody = req.body;
  }
  const balanceReq = await fetch("http://ec2-34-222-26-195.us-west-2.compute.amazonaws.com:8080/balances", {
    method: req.method,
    headers: req.headers,
    body: originBody,
  });
  if (balanceReq.status === 200) {
    try {
      const balances = await balanceReq.json();
      res.json(balances);
    } catch(e) {
      res.json({ok: true});
    }
  } else {
    res.status(balanceReq.status).end();
  }
}