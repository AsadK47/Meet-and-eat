[![Build Status](https://travis-ci.org/AsadK47/Meet-and-Eat.svg?branch=master)](https://travis-ci.org/AsadK47/Meet-and-Eat)
[![codecov](https://codecov.io/gh/AsadK47/Meet-and-Eat/branch/master/graph/badge.svg)](https://codecov.io/gh/AsadK47/Meet-and-Eat)

# Meet&Eat

Welcome to Meet&Eatt, the best place to find friends, food and fun.

![](assets/README-559a088e.png)

## Iteration 1.0 Features

:white_check_mark: Users can sign up and sign in to Meet&Eat<br />
:white_check_mark: Users can upload an avatar<br />
:white_check_mark: Users can post a lunch spot with a date, time, location and description<br />
:white_check_mark: Lunch spots appear on a map with the location marked<br />
:white_check_mark: Users can see all posted lunch spots on the homepage<br />
:white_check_mark: Users have a profile that displays the lunch spots they've posted<br />
:white_check_mark: Users can only edit or delete their own lunch spots<br />
:white_check_mark: Users are automatically an attendee of a lunch spot they post<br />
:white_check_mark: Users can join a lunch spot they'd like to attend<br />

## Iteration 2.0 Features

:negative_squared_cross_mark: Expired lunch spots are not listed<br />
:negative_squared_cross_mark: Users can assign themselves interest tags (ex. coding)<br />
:negative_squared_cross_mark: Interest tags can be edited or deleted<br />
:negative_squared_cross_mark: Interest tags are attached to any lunch spot a user posts<br />
:negative_squared_cross_mark: Interest tags are attached to any lunch spot a user joins<br />
:negative_squared_cross_mark: Users can see the interest tags of all users who have joined a lunch spot<br />
:negative_squared_cross_mark: Users can filter lunch spots by time and date<br />
:negative_squared_cross_mark: Users can filter lunch spots by location<br />

## Links to the application and development board

**Heroku application:** https://meet-andeat.herokuapp.com/

**Trello board:** https://trello.com/b/P43rsW5t/meateat-planning

## Members
- [Asad Khan](https://github.com/AsadK47)
- [Cristopher Palacios](https://github.com/criszelaya24)
- [Mateusz Stacel](https://github.com/mateuszstacel)
- [Jackie Dunne](https://github.com/kiedunne)

## Local installation instructions

```
clone repo
cd into Meet-and-Eat
bundle install
createdb pg_meetandeat_dev
createdb pg_meetandeat_test
rake db:schema:load
```
**Testing Instructions**

```
bundle exec rspec # Run the tests to ensure it works
bin/rails server # Start the server at localhost:3000
```

## User Stories

```
Add here
```

## Contributing to the project

If you wish to contribute to the project then please do so by running the code through the rspec tests and the rubocop linter.

We are open to pull requests and would definitely appreciate any comments and feedback that you may have about the project.

Please ensure that the pull request is descriptive and easy to understand so as to minimize the time between the request and merge.

## Deploying to Heroku

**Please follow the instructions set below:**

1. Create an account on Heroku
2. Install the Heroku command line tools by running the following from the command line ```brew install heroku/brew/heroku```
3. Create the heroku application, either on Heroku(https://id.heroku.com/login) or running the following from the command line ```heroku create app-name```
4. Push the app to Heroku via the command line using ```git push heroku master```
5. Create the app database on Heroku via the command line using ```heroku run rake db:migrate```
6. Open the app on Heroku via the command line using ```heroku open```
7. You may need to login via the Heroku command line interface (CLI) at any point: ```heroku login```
8. On the Heroku website, go to your app console and take a look at the deploy options.

**From there, you can connect to GitHub via the Heroku integration. Select the option to automatically deploy the app to Heroku only when the CI build passes.**

## Documentation

Below are some diagrams which we drew up in the initial stages of the application during our daily standup. It helped us to create a basic outline of the project and we used it as a guide to get us up and running.

Furthermore we had created a wiki page to help us document our work (link found below) which would in the show how much we had learned and accomplished throughout the project.

Wiki pages: https://github.com/AsadK47/Meet-and-Eat/wiki

### Diagrams

**Diagram of MVP**

![](assets/README-a29aa4ff.jpg)

**Diagram of the iterations in development**

![](assets/README-56d7b49b.jpg)
