# GenesysAssignment
A short single-day application project for the Genesys interview Pipeline

Please see JOURNAL.md, as I outline my progress, thought process, and other steps during the development of this project. It's a bit informal, but I like having a close-to-stream-of-consciousness rambling during this so you get a better feel for who I am as a developer since this wasn't a live-coding interview.

## Running this project

`npm install` in `genesys-assignment`

`npm start`


## Assumptions
I am primarily assuming that when you engage with this site redesign, you are an already-signed-in user. Upvoting / Hiding interactivity doesn't work on the main site without beihng logged in, but implementing an authentication workflow for this app is way out of scope.

## Remaining Bugs
This project wasn't perfect given the time constraints, so a handful of issues still persist but aren't worth the time investment.

Submission time display is not correct at all. 

Links don't go anywhere (except the actual article, I liked actually reading a few of the articles that would pop up over the course of development).

Style inconsistensies between header / footer, button color, and Rank/Score for posts not being perfect.

Mobile device / small screen layout had a small amount of consideration but it's not completely clean. I developed with the perspective of a desktop-application that's closer to 1280x720.