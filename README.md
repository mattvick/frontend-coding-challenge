# Frontend Coding Challenge

## Functional Requirements

Build a UI to search the Movie DB: The user should be able to enter some text into a search field, see and browse the results from the Movie DB. Anything else it does it up to you!

## Documentation

* Use React to demonstrate knowledge of the framework used in the role
* Use Webpack and Babel to build and run the code
* Use dotenv to store the Moive DB API token and don't commit `.env` file in the repo
* Create unit tests using Jest
* Create an autocomplete suggestions widget to help users find movies quickly
* Make network requests to search the Moive DB as a user types
* Debounce to limit network request intervals to no more than 2 per second
* Display the selected movie details below the search field
* Create a route for each movie so these can be bookmarked by users
* Retrieve movie posters to give more colour to users

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

## Instructions to test the code

Run Jest using the command `npm test` or `yarn test`

## Limitations

* Limited movie ditails
* Basic CSS styling
* Minimium accessibility

## To do

* Display more movie information and images 
* Improve layout of movie information
* Better handling of error situations
* Activity indicators
* More beautiful design
* Greater test coverage
* Simulate and test search text input events using React Testing Library or Enzyme
