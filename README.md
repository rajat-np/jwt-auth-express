## Getting started

```bash
git clone https://github.com/rajat-np/jwt-auth-express
cd jwt-auth-express
npm install
cp .example.env .env
npm start
```

Edit the `.env` file to set the correct env variables.

### Routes

`/user/authenticate` to authenticate a user and returns a token, Expects email, password <br/>
`/json/patchJson` to patch a json file. Expects token, a jsonData object and patchObject <br/>
`/image/getImage` to get a 50x50 thumbnail of any image. Expects token and url of an image
