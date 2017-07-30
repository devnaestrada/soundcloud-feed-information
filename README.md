# SoundCloud Feed Information
Get Basic Soundcloud auto generated feed information

## Basic introduction
We have a podcast called [DEVNAESTRADA](http://devnaestrada.com.br), and our episodes are hosted by Soundcloud.
When we upload a new episode on Soundcloud, they generate a rss feed with our new information about episode, like: `Title`, `Url`, `image cover`, `mp3 url` and etc.

This script is just for help get the basic information that we need to put inside [Github DNE](https://github.com/devnaestrada/devnaestrada.com.br) project.

## Setup and Run
- `nodejs` and `npm` are required

- Run `npm i`, to install all dependencies

- Open `index.js`, and set your RSS soundcloud feed

- Run `npm start`, and get the information in terminal :)

### Credits

We use [Node FeedParser](https://github.com/danmactough/node-feedparser) to get all information about the feed, credits for them :)
