# apto-quiz

## Setup

You can choose to use this starter project of nodejs + angular 2 or start your own. If you use this starter project you'll need:

* nodejs 7 installed

```
unzip project
enter the main directory
npm install

In two different windows run the api server and the webpack server.
Hit http://localhost:4200 which is your webpack server.
You can curl the api server at http://localhost:3000

npm run api
npm run serve
```

## What to do

HackerNews has an API with documentation available at https://github.com/HackerNews/API

If you would like to just handle all http calls on the frontend you may, but to make things easier using a backend language of your choice create an aggregated JSON API from the hacker news API:

* Get the first 50 __stories__ from hacker news.
* For each story. Get all their __comments__.
* For each story. Get their __user__.
* For each user. Get their top 5 __submitted stories based on karma__.

With our new JSON API create an Angular 2 application which:

* Displays a list of the __stories__.
* Allows you to click on a __story__ and see all the __comments__ and the __user__.
* Allows you to click on a __user__ and shows their top 5 stories.
* Has semantic urls such that I can revisit a user and see their top 5 stories.

If you have time feel free to add some tests, but don’t stress out too much about it.

__Please share a short paragraph of what you thought about the exercise as well.__

## notes from Eric
Overall it was a fun exercise to build a new app in Angular2. I have done a fair amount of work with Angular2,
but probably haven't scaffolded an app this much. The challenges were in setting up the front end router
