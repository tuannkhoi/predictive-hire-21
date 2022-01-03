# Predictive Hire frontend project

## Run the app

First, make sure you have [Git](https://git-scm.com/downloads) and [NodeJS](https://nodejs.org/en/) installed.

Clone the [tuannkhoi/predictive-hire-21](https://github.com/tuannkhoi/predictive-hire-21) repo:

```
git clone https://github.com/tuannkhoi/predictive-hire-21.git
```

Navigate to the `client` folder:

```
cd predictive-hire-21/client
```

Install the dependencies and start the app:

```
npm i && npm start
```

Go to [localhost:3000](http://localhost:3000) in your machine and you will see the app.

## Use the app

You can see 3 components in the Navigation Bar at the top of the page:

- The "Predictive Hire" text
- The Nested Menu
- The Sign In button

If you click on the "Predictive Hire" text, you will be taken to the "/" route.

If you hover on any item in the submenu, you will see its children item in a dropdown.

You can test the multilevel menu if you hover on Platform -> Eliminating Bias -> Another level -> Yet another level -> Okay final level.

If you wish to add more levels to the menu, edit the `element` variable in `client/src/components/NavBar/NavBarMenu/NavBarElements.ts`.

If you click on the `Sign in` button, a sign in form will appear. If you want to close the form, you can either click the `X` button at the top right corner of the form or click anywhere outside the form.
Both field `Email` and `Password` are required, if you try to submit without filling either of them, a red reminder will be displayed.

Try logging in with:

```
{
    "email": "eve.holt@reqres.in",
    "password": "anything"
}
```

The app will display a green text with your token, meaning you logged in successfully.

Due to the nature of the [fake API](https://reqres.in), as long as your email is `eve.holt@reqres.in`, you can login with any password.

But if your email is not `eve.holt@reqres.in`, the app will alert `user not found` in red text.

## Run the unit tests

Navigate to the `client` folder and run:

```
npm test
```
