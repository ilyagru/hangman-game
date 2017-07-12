# My Solution

Hey there!

## Description

### General

I made the task using React.js and Webpack.
I tried to create the app which meets all the requirements for this assignment as fast as possible.
Also I added some additional features like unit testing and sounds.

The live version is available at [https://ilyagru.github.io/hangman-game/](https://ilyagru.github.io/hangman-game/).

**NOTE**: Wordnik API doesn't use HTTPS. So to be able to play you need to allow your browser load from insecure resource or launch it on your computer. (In Chrome you can click Shield icon in the URL bar and click Load unsafe scripts).

### Testing

For tests I use Jest, Enzyme, Sinon.
A set of tests is written.

### Styles

Custom styles are written with SASS (SCSS syntax) preprocessor.

## Build Setup

1. Clone or download this repository
2. Install and run

``` bash
# go to directory
cd hangman-game

# install dependencies
npm install

# serve with hot reload at localhost:3000
npm start

# build for production with minification
npm run build

# deploy to gh-pages (don't forget to change homepage in package.json file)
npm run deploy

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](https://github.com/facebookincubator/create-react-app).

**Thank you for the given opportunity!**

**Please contact me if you have some questions or can give me valuable feedback.**


---

# Front-end task

Hey there!

Thanks for joining recruitment for Front-end dev @ netguru. We have a small task for you!

![Preview](https://raw.githubusercontent.com/netguru/frontend-recruitment-task/master/sources/hangman.png)

This is a simple Hangman game (you can find PSD in [sources](https://github.com/netguru/frontend-recruitment-task/tree/master/sources) directory). Can you make this stuff work?

Use [CodePen](http://codepen.io/) as playground (create an account and create new pen, once you’re done send us link to your work). You can use any different platform or even create it using your own setup if you want but please remember that:
+ You should provide us with link to your game and it should work out of the box (we should click link and be able to play)
+ We should be able to take a look at your code :) (link to CodePen, Github, ZIP file will work perfectly for us)

### Rules & hints
1. Use real API for fetching random word. [Wordnik](http://developer.wordnik.com/docs.html#!/words) could be great for that.
2. There should be no folk at game beginning. Game ends once folk earns left foot (see diverted flow below).
![Flow](https://raw.githubusercontent.com/netguru/frontend-recruitment-task/master/imgs/flow.png)
3. You can write your game in pure JS or use framework of your choice (React, Ember or Angular preferred).
4. Styles should be written in Sass (SCSS).
5. Using newest ECMAScript Standard is a huge plus.
6. Basic technology stack at Netguru includes also HAML. Using it is a plus.
7. Pay attention to code quality, formatting, conventions etc. (Your code is your business card)
8. You can find cropped images in images directory, but try not to use all of them (CSS power!).
9. Make use of keyboard as controller.
10. Game over screen is available in [sources](https://github.com/netguru/frontend-recruitment-task/tree/master/sources) directory.
11. Remember about users with retina screens.

**Good luck! If you have any questions feel free to ping us!**
