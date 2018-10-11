# STRV.io

## How to run 

- Run `yarn` for download dependencies
- Run `yarn dev` for development environment
- Run `yarn build` for production environment
- Open `localhost:3000`

## Deployment

1. Make sure you have installed `firebase-tools`
> If not, run `yarn global add firebase-tools` and then login with `firebase login --reauth`.
> You also need to have an access into `strv-io` project in Firebase under your email.
2. Then run `yarn deploy` handles deployment to firebase host

## Production

[strv.io](https://strv.io)

## 404 Page

Firebase Static Hosting requires having a specific file named `404.html` in the public directory ([read more](https://firebase.google.com/docs/hosting/url-redirects-rewrites#section-404)), therefore following modification is being applied while doing export
```
next build && next export && mv out/404/index.html out/404.html && rm -rf out/404
```