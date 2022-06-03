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
* create reusable components
* create reusable layouts for components
* split component in parts ( keep one component no longer than ~ 100 lines )
* avoid styling inside the component (lots of repeating code)
* create context for movies and fix rerender problem with memoization ( at the moment it is not rerendering when state changes and there is a fake "rerender" with page reload )
* create a global reusable component for products ( in case the app is going to be expanding )
* create better component names to match the logic/ purpose
* resolve a controlled/ uncontrolled component bug ( make it either controlled or not )
* create a new route structure ( in case the app is going to be expanding/ the authorization will be enabled etc. )
* enable authorization ( user/admin roles )
* create admin dashboard
* enable user info update function and create user page
* get, set and remove tokens/ auth withh SessionService only ( localStore is being used while in development stage )
* get auth state through redux selectors (useSelector)
* create constants for errors and unify error messages
* create helpers for reusable functions/ constants
* try not to use more than 3-4 variable names per file/ component
* enable theme variables where possible, create spacing and responsive design variables in theme
* enable search and filtering by genre (create/find filter object in backend and filter through url queries, create custom filter component logic in frontend (without using MUI))
* enable password reminder
* fix prettier/ eslint
* fix the design really hard

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

