## React, Redux, and Auth0 Boilerplate

This is a super simple web app boilerplate project with the following libraries hooked up and ready to go:

[Create React App](https://github.com/facebookincubator/create-react-app)

[Redux](https://redux.js.org/)

[React Bootstrap](https://react-bootstrap.github.io/)

[Auth0](https://auth0.com/)

### To use Auth0:

The authentication service in this app is pulled directly from the official [Auth0 React tutorial](https://auth0.com/docs/quickstart/spa/react/01-login).

To use, first set up an Auth0 account and configure your application.  You will need your client ID and domain.  Also, configure a callback URL for this application in your Auth0 dashboard.  The boilerplate assumes it will be `http://localhost:3000/callback`.

Add these variables to the file `/src/services/auth/auth0-variable.example.js` and rename it to `/src/services/auth/auth0-variable.js`.

Refer to the [Auth0 tutorial](https://auth0.com/docs/quickstart/spa/react/01-login) and [accompanying repo](https://github.com/auth0-samples/auth0-react-samples/tree/master/01-Login) for further help.

### To run the app:

Start with `npm start` or `yarn start` per the default create-react-app documentation.
