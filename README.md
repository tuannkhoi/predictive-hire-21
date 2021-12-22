# Predictive Hire frontend project

## Run the app

There are 2 ways to run the app. The first one is by using `Docker`. The second one is by pulling the `source code` and install the dependencies as usual.

### 1. Docker

First, make sure you have [Docker](https://docs.docker.com/get-docker/) installed.

Then, pull the image from Docker Hub:
```
docker pull tuannkhoi/predictive-hire-fe-test:latest
```
Run a container with the downloaded image:
```
docker run -p 3000:3000 tuannkhoi/predictive-hire-fe-test
```
Go to [localhost:3000](http://localhost:3000) in your machine and you will see the app (it may take a while for the container to start).

### 2. Download the source code

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

If you hover on any item in the nested menu, you will see a list of sub-items, clicking on any of those item will take you to the relevant route and you will see the relevant content.

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
:warning: You will notice that the test `render nested menu correctly` failed. I'm sure that there is **nothing** wrong with the nested menu, but rather the way I wrote the test in `NavBarMenu.test.tsx`. Here is a [quick video I made to explain the issue](https://youtu.be/WSwQ27zU-kE).

I'm sure that once I'm more experienced with FrontEnd testing I can solve this issue.