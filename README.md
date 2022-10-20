# Youtube-like app
## Main goals
1. Use Youtube API.
2. Apply styling which will make the app look similar to YouTube (no need for it to be exactly the same).
3. Make the application responsive.
4. Make content displayable and playable.
5. Utilize application state.
6. Visualise data loading states.
7. Add unit tests.
8. Add at least one UI test for a happy path related scenario.
9. It must be possible to run the app by running a single command.

Live preview available at: https://dpiorun.github.io/youtube-like/.

## Tech stack
* React for the UI.
* State management with React Context.
* Avoid using styling libraries like Bootstrap, Foundation, Material UI etc.
* Typescript.
* Create React App.
* Puppeteer for e2e tests, React Testing Library, and Jest for tests.
* Docker to help development management.

## Run
To run the app locally it's necessary to obtain the API key. How to do this is described at https://developers.google.com/youtube/v3/docs. API key should be provided in `.env` file. For reference look at the `.env.example`.  
   
Make sure that you have working [Docker](https://www.docker.com/products/overview) and [Docker Compose](https://docs.docker.com/compose/install/).

Build and run instance
```shell
make docker build && make docker up
```

Enjoy at `http://localhost:3000`

To gracefully stop the docker container:
```shell
make docker stop
```


## Development
Before pushing anything run:
```shell
make lint
make test
npm run e2e
```

## Tests
Run only the tests that were specified with a pattern or filename:
```sh
make test my.test #or
make test path/to/my-test.js
```

Additionally you can provide options:
```sh
make test "[options]"
```
for example:
```sh
make test " --coverage" #watch the space before flag, or
make test "my.test --json"
```

For list of available options visit [Jest CLI Options](https://jestjs.io/docs/cli).

### Running e2e tests
Ensure that the application is currently running on http://localhost:3000 and run
```sh
npm run e2e
```

## Deploy on Github pages
Run 
```sh
npm run deploy
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
