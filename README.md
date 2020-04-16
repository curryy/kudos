# Kudos Portal

React application to adding posts with kudos for other users.

## Used technologies

- React (https://reactjs.org/)
- TypeScript (https://www.typescriptlang.org/)
- Styled-components (https://styled-components.com/)
- React-bootstrap (https://react-bootstrap.netlify.com)
- Axios (https://github.com/axios/axios)
- Storybook (https://storybook.js.org/)
- Webpack (https://webpack.js.org/)
- Express (https://expressjs.com/)

## Server part

The project contains a simple server for testing purposes that returns example data.

### Installation and running locally

```
cd server
yarn
node ./
```

## Application

### Installation

```
yarn
```

### Components

All components in the application are documented by storybook. To browse components, run:

```
yarn storybook
```

Page should open automatically in your browser.

### Starting app locally

To run application you need to set enviroment variable with server url (`API_URL`). Testing server in this project running on `http://localhost:3000`.

Copy `.env.exmple` to `.env`.

```
yarn start
```

### Bulding

```
yarn build
```

Your code will be built in the dist/ directory.

## Node

Used node version: 12.13.0
Used yarn version: 1.7.0
