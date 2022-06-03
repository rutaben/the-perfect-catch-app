# the perfect catch app

A favorite movie list app with login flow and registration.

#Description

Users can:
* create a new account
* login
* add favorite movies and specify their genres from a select menu
* delete selected genres before submission
* delete movies from the list

Features:
* authentication
* create/ read and delete operations
* schema based form-level validation
* data is being saved in and retrieved from server side

Ideas for further development:
* resolve a controlled/ uncontrolled component bug ( make it either controlled or not )
* get, set and remove tokens/ auth withh SessionService only
* create more reusable components and layouts for components
* split large components in parts
* avoid styling inside the component (lots of repeating code)
* create context for movies and fix rerender problem with memoization ( at the moment it is not rerendering when state changes and there is a fake "rerender" with page reload )
* create a global reusable component for products ( in case the app is going to be expanding )
 * enable search and filtering by genre (
    - server : use MongoDb aggregation pipelines to create "queries" and narrow a list of docs by criteria
    - client: create custom filter component without MUI, a global component for filters, fetch and format filter data, use library to filter by queries (i.e. react-query )
* enable authorization ( user/admin roles ) and create a new route structure 
* user profile/ admin dashboard
* create constants for errors and unify error messages
* create helpers for reusable functions/ constants
* use less than 5 variable names per component
* enable theme variables where possible, create spacing and responsive design variables in theme, responsive design

## Dependencies

* Node.js version 16 or greater

## Installing and executing program

## Client

### Navigate to client side: 
```
$ cd client
```
### Install libraries:
```
$ npm i
```
### Run app:
```
$ npm start
```
## Server

### Declare environment variables

* create '.env' file
* copy variables from '.env-example' and declare them in '.env'

### Navigate to server side: 
```
$ cd server
```
### Install libraries:
```
$ npm i
```
### Run server:
```
$ npm start
```

## Authors

Ruta Bendoraityte

