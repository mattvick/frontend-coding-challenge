# Frontend Coding Challenge

## Functional Requirements

Build a UI to search the Movie DB: The user should be able to enter some text into a search field, see and browse the results from the Movie DB. Anything else it does it up to you!

## Documentation

Setting up React, webpack and Babel adds some overhead. This is a tiny project so I considered using vanilla JavaScript, but as the role you are looking to fill will be using React I've solved the challenge using React.

I've created a simple custom hook to debounce the Movie DB API requests.

### Dependencies

* [axios](https://github.com/axios/axios) has been used to make HTTP requests.
* [React Router](https://reactrouter.com/) has been used for routing. Movie info can be access by directly entering a URL, for example [http://localhost:8080/movie/680](http://localhost:8080/movie/680)

## Instructions to run the code

1. Clone the repo
1. Rename the file in the root of the project named `.env.example` to `.env`
1. Replace the string `abc123` with your The Movie DB **API Read Access Token**. Your access token can be found at the bottom of the [The Movie DB account settings page](https://www.themoviedb.org/settings/api).
1. In the terminal in the root of the project:
   1. Install dependencies using the command `npm install` or `yarn`
   1. Run the development server using the command `npm start` or `yarn start`
1. Navigate to the URL `http://localhost:8080/` in your browser
