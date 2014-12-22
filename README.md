Austin MEAN User Group Site - Team 1
====================================

##Introduction This is the repo for team 1 working on one of the AusMug web apps.

The project structure is supposed to be minimalist, and does not include build tools like Grunt or Gulp. The scripts to run the tests and to start the application is in the `package.json` file.

This also gives us an opportunity to learn more about the stack than if we used a readymade generator from [Yeoman](http://yeoman.io/generators).

The inspiration for the project structure was taken from the following blogs:

-	[Introduction to the MEAN Stack](http://thecodebarbarian.com/2013/07/22/introduction-to-the-mean-stack-part-one-setting-up-your-tools/)
-	[How to use npm as a build tool](http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/)

##Getting up and running

1.	Install `Node.js`, `Mongo DB` & `git`
2.	Fork and clone the repo to your machine.
3.	Run `npm install` to get the latest dependencies
4.	Run `npm test` to make sure that the tests are passing. *There are only unit tests for the client side code for now.*
5.	Run `npm start` to start the server, and browse to http://localhost:3000 to see the home page.

##What is left to do

1.	Add unit tests for the server side code.
2.	Setup commits to the upstream branch to build using Travis CI.
3.	Set up build step to generate minified assets on the client side.
4.	Evaluate whether to use a build tool / task runner like [Grunt](http://gruntjs.com/) or [Gulp](http://gulpjs.com/).
5.	Style the UI, decide if we want to use a CSS framework like [Bootstrap](http://getbootstrap.com/) or [Foundation](http://foundation.zurb.com/) or something simpler. Optionally choose a CSS preprocessor like SASS, Stylus or LESS.
6.	Add end to end tests for the UI using protractor.
7.	The project currently does not use the `jade` view engine, but just renders the index.html from the public folder. Evaluate if we need to use `jade` view engine.
8.	...

##Troubleshooting

> If `npm test` is failing, you might have to install `karma-cli` globally by running the command `npm install -g karma-cli`
