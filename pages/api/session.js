// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const fetch = require("node-fetch");

export default async (req, res) => {
  const { _act } = req.cookies;
  if (_act) {
    const userInfoRes = await fetch("https://www.googleapis.com/oauth2/v1/userinfo?alt=json", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + _act,
      },
    })
    if (userInfoRes.status === 200) {
      res.status(200).json(await userInfoRes.json())
    } else {
      res.status(401);
    }
  } else {
    res.send(401);
  }
}
