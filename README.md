This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## TODO
- for `express` use something like `app.use(express.static('build'));` to serve the build folder after running `npm run build` in create-react-app

## Before stating
Make a `.env` file and put in your mongoDB link as `MONGODB_URI` 

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode using `concurrently` to have both ExpressJS and ReactJS work together.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


## The Idea

This app is for me to journal my trades. The idea came from SMB Capital's videos on YouTube talking about how their traders journal to get better at their craft. 

## The Stack

This app uses Express for the backend and follows RESTful routing. MongoDB is the chosen database, and Mongoose is how I work with the database. For the front-end, I am using React and React Router to display and transition between pages.

## TODO

learn how to set up tests and do more error handling

