# RocketList

## Description
RocketList is a react website that we pulled inspiration from Craigslist, Yahoo Answer, and Reddit. It allows for different topics and for people to make a post where others can make comments. We also added a feature that let users join chat rooms of a specific post so that they can discuss in real time what ever they wanted to.

## Installation
You will need to `npm install` to get all of the npm packages.

Also note that this application has separate servers that handle the application database and one that handles the chat.
* [Database](https://github.com/meganjacobs97/RocketListBackend)
* [Chat](https://github.com/vb27/RocketListServer)

## Usage
1. [Create An Account](#Create-An-Account)
2. [Make a post](#Make-A-Post)
3. [Comment On Posts](#Comment-On-Posts)
4. [Join A Chat Room](#Join-A-Chatroom)

## Create An Account
Like all websites nowadays we allow for people to create accounts and login.

![login example](/public/ex-images/login.PNG)
![loggedin example](/public/ex-images/loggedin.PNG)


## Make A Post
In this application we have categories with subcategories. Users can uses these subcategories to find post specifically or post on them. Once logged in you will see a `Make a Post` button that opens a form that allows for a new post to be made.

![PostButton](/public/ex-images/postbutton.PNG)
![PostForm](/public/ex-images/makepost.PNG)

## Comment On Posts
Once on a post you can click on a post and be directed to the post page. On the post page you can add a comment.

![comments on post](/public/ex-images/postwcomments.PNG)


## Join A Chatroom
Again, on the post page. At the bottom of the post there is a chat button. Once you click on the chat it will redirect you to a join page. When you click on the join chat button you will then be sent to a unqiue chat room based on the post you came from.

![join chat button](/public/ex-images/joinchat.PNG)
![chat room](/public/ex-images/chat.PNG)

## Credits
Creators:
* [Paul Lee](https://github.com/vb27)
* [Dion Leung](https://github.com/dionleung14)
* [Louis Coleman](https://github.com/coleloui)
* [Megan "Rory" Jacobs](https://github.com/meganjacobs97)
* [Marlon Jones](https://github.com/mjones-27)

Special Thanks:
* [David Whynot](https://github.com/davidmwhynot)
* [Adrian Hajdin](https://github.com/adrianhajdin)
* [Academind](https://academind.com/)

## NPM Packages
* [apollo](https://www.apollographql.com/)
* [graphql](https://www.npmjs.com/package/graphql)
* [popper.js](https://www.npmjs.com/package/popper.js)
* [query-string](https://www.npmjs.com/package/query-string)
* [react](https://www.npmjs.com/package/react)
* [react-emoji](https://www.npmjs.com/package/react-emoji)
* [react-scroll-to-bottom](https://www.npmjs.com/package/react-scroll-to-bottom)
* [react-spinners](https://www.npmjs.com/package/react-spinners)
* [socket.io-client](https://www.npmjs.com/package/socket.io-client)
* [tailwindcss](https://www.npmjs.com/package/tailwindcss)