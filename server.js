const express = require('express');
const { auth } = require('express-openid-connect');

const app = express();
const port = 3000
const ip = "0.0.0.0"

app.use(
  auth({
    issuerBaseURL: 'http://127.0.0.1:5556/dex',
    baseURL: 'http://127.0.0.1:3000',
    clientID: 'example-app',
    clientSecret: 'ZXhhbXBsZS1hcHAtc2VjcmV0',
    secret: 'mysecret',
    idpLogout: true,
    authorizationParams: {
      response_type: 'code', // This requires you to provide a client secret
      audience: 'http://127.0.0.1:3000',
      scope: 'openid profile email',
    },
  })
);

app.get('/', (req, res) => {
  res.send(`Hello, ${req.oidc.user.name}!`);
});


app.get('/userinfo', (req, res) => {
  res.setHeader('Content-type', 'application/json');
  res.send(JSON.sringify(req.oidc.user))
});

app.listen(port, ip, () => {
  console.log(`listening on ${ip}:${port}`)
})
