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
but probably haven't scaffolded an app this much. The challenges were in setting up the front end router and getting
everything injected correctly. It is quite a bit different than Angular 1.x in those respects. I did have a problem accessing the HackerNews API from the link above, they were having firebase issues, I kept getting 500s, so I used a different API (https://hn.algolia.com/api).
I tried to mirror the hackernews styling, and added some apto colors. The exercise took a little over 8 hours, overall it was good and fun, a few tricky things, but nothing out of the ordinary. It was a good learning experience and I plan on using this scaffolding as a quickstart for future angular2 projects.
I did try to push this to heroku, but it still needs a fair amount of configuration for that, specifically configuring the proxies, since it is set up to send everything to localhost:3000, so I didn't get around to adding all that configuration.

I look forward to hearing your feedback and questions, have a great day,
Eric Hartmann
