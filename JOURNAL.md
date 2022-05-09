# Journal

## Project Initialization

I'm kickstarting this application project with a quick and simple

`npx create-react-app --template cra-template-typescript`

and cleaning up from there.

I attempted getting this to work on my older school laptop but that's still on Windows7... the upgrade tool for windows 10 does not run and gives vague error messages, so I'm having to take a lot of time setting up my current personal computer for this project's development.

## First Steps
I first setup a rudimentary API layer for the front end to connect to so I had some access to the data. Just a simple snag-all-500-stories so I could get some data displaying on the page, then refine from there.

First priority on the actual client side was coming up with a more modern look for the stories, since that's the main way people engage with the site (in this assignment's scope). The current design is too compact, and doesn't give enough immediate info to the user as to what everything is (link, button, redirect, etc).

The first thing I noticed about the existing site is that the elements of the stories you can interact with are not clear at all. The links have slight underlines, but I wanted to highlight the actual action items you can take on stories (voting, hiding commenting), so those are visibly defined buttons instead of small pieces of text with minimal responsiveness. Beyond that, I wanted to give the story feed a more responsive and modern look: spaced out asset cards, slight highlighting on hover so you don't lose your spot, slightly more visually responsive buttons and links.

For user convenience, I wanted to keep the header and footer static with respect to the story feeed. Having to scroll the entire page to re-navigate to something else on the site is a little less UX friendly.

## Winding Down
This problem was given a reasonable time constraint (around 8 hours), so once I started approaching this time limit, I started prioritizing the actual critical feature set that I want to implement. At this point (an hour or two left, not quite sure) I really only had story-feed paging and the footer left to implement. Other things that I had noted at this point were just lower priority items (styling bugs, missing links / interactivity that was out of scope).

## Polishing Time
After winding down and finishing up critical features, I did want to take a short block of time to polish, refactor, and clean up my code for this assignment. I have a decent amount of React/Javascript experience, but actually using Typescript was new to me. I wanted to give an actual shot at researching and using best practices, enforcing type constraints where feasibly possible, and other things that I could tie together within an hour or so. No feature functionality changed at all during this time.