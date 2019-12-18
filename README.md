# ur-fe-challenge

A ReactJS solution for the UR FrontEnd Code Challenge.

## Idea of the App

The task is to implement a small webapp that will list the most starred Github repos that were created in the last 30 days.
You'll be fetching the sorted JSON data directly from the Github API (Github API explained down below).

## Features

- As a User I should be able to list the most starred Github repos that were created in the last 30 days.
- As a User I should see the results as a list. One repository per row.
- As a User I should be able to see for each repo/row the following details :
  - Repository name
  - Repository description
  - Number of stars for the repo.
  - Number of issues for the repo.
  - Username and avatar of the owner.
- As a User I should be able to keep scrolling and new results should appear (pagination).

## Libraries Used

- momentjs : A library to Parse, validate, manipulate, and display dates and times.
- react-bootstrap: (I use bootstrap for quick views development and SASS/CSS Grid for large projects) :D;
- fontawesome: provices svg icons.
- lodash.debounce: I debounce the handleScroll function in order to not overrequesting the GitHub API and for perfermance optimization.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
