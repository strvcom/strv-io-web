![](https://strv.ghost.io/content/images/2018/07/3.jpg)

### STRV.io - Open Source Library Hub

---

## Purpose

Over the years, our team has built up quite an impressive volume of open source libraries based around technologies we love as well as new and emerging trends we think are worth keeping an eye on.

In an effort to share our know-how, swap ideas, and facilitate constructive dialogue with other mobile and web enthusiasts, we present a website where you can find all our developers’ libraries in one tidy spot.

[Read more on STRV blog](https://www.strv.com/blog/introducing-strv-io-our-new-open-source-library-hub) 

## Development Instructions

Project is based on [Next.js](https://github.com/zeit/next.js) – a minimalistic framework for server-rendered React applications.


### How to run 

- Run `yarn` for download dependencies
- Run `yarn dev` for development environment
- Run `yarn build` for production environment
- Open `localhost:3000`

### Deployment

1. Make sure you have installed `firebase-tools`
> If not, run `yarn global add firebase-tools` and then login with `firebase login --reauth`.
> You also need to have an access into `strv-io` project in Firebase under your STRV email.
2. Then run `yarn deploy` handles deployment to firebase host.

### 404 Page

Firebase Static Hosting requires having a specific file named `404.html` in the public directory ([read more](https://firebase.google.com/docs/hosting/url-redirects-rewrites#section-404)), therefore following modification is being applied while doing export
```
next build && next export && mv out/404/index.html out/404.html && rm -rf out/404
```

## License

[MIT](./LICENSE)