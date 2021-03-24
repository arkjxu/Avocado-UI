// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const cookie = require("cookie");

export default (req, res) => {
  const body = JSON.parse(req.body);
  res.setHeader("Set-Cookie", cookie.serialize("_act", body.access_token, {
    httpOnly: true,
    maxAge: 60 * 60 * 1,
  }));
  res.status(200).json({ name: 'John Doe' })
}
