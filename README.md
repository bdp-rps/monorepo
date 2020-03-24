# bdp-rps monorepo

## Installation

```sh
yarn
yarn setup
```

## Start Website

```sh
cd packages/website
yarn dev
```

## Deployment

First we need to make sure that we the most recent versions are published.

> Requires npm admin rights.

```sh
npm run release
```

Now we can deploy the page.

> Requires Now admin rights.

```sh
yarn deploy
```
