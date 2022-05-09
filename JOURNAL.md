# Journal

## Project Initialization

I'm kickstarting this application project with a quick and simple

`npx create-react-app --template cra-template-typescript`

and cleaning up from there.

I attempted getting this to work on my older school laptop but that's still on Windows7... the upgrade tool for windows 10 does not run and gives vague error messages, so I'm having to take a lot of time setting up my current personal computer for this project's development. I definitely fall under the "modern dev in the workplace, caveman dev in the home" archetype for better or for worse.

## First Steps
I first setup a rudimentary API layer for the front end to connect to so I had some access to the data. Just a simple snag-all-500-stories so I could get some data displaying on the page, then refine from there.

First priority on the actual client side was coming up with a more modern look for the stories, since that's the main way people engage with the site (in this assignment's scope). The current design is too compact, and doesn't give enough immediate info to the user as to what everything is (link, button, redirect, etc).

The first thing I noticed about the existing site is that the elements of the stories you can interact with are not clear at all. The links have slight underlines, but I wanted to highlight the actual action items you can take on stories (voting, hiding commenting), so those are visibly defined buttons instead of small pieces of text with minimal responsiveness. Beyond that, I wanted to give the story feed a more responsive and modern look: spaced out asset cards, slight highlighting on hover so you don't lose your spot, slightly more visually responsive buttons and links.

For user convenience, I wanted to keep the header and footer static with respect to the story feeed. Having to scroll the entire page to re-navigate to something else on the site is a little less UX friendly.

## Winding Down
This problem was given a reasonable time constraint (around 8 hours), so once I started approaching this time limit, I started prioritizing the actual critical feature set that I want to implement. At this point (an hour or two left, not quite sure) I really only had story-feed paging and the footer left to implement. Other things that I had noted at this point were just lower priority items (styling bugs, missing links / interactivity that was out of scope).

## Polishing Time
After winding down and finishing up critical features, I did want to take a short block of time to polish, refactor, and clean up my code for this assignment. I have a decent amount of React/Javascript experience, but actually using Typescript (not just reading) was new to me. I wanted to give an actual shot at researching and using best practices, enforcing type constraints where feasibly possible, and other things that I could tie together within an hour or so. No feature functionality changed at all during this time.

A lot of the Typescript polishing boiled down to actually adding type constraints on my functional components and their props, Client-api return types. A quick glance at my code history on this project will definitely prove I have primarily worked with JS+React, not Typescript and React. I have a lot of experience with typed language, but injecting that into my JS mindset during this project was slow. Type constraints should ABSOLUTELY NOT be an afterthought, but at the same time I wanted to actually get to a somewhat presentable solution given the time frame.... I think the proper analogy here is polishing before a pull request. It's one thing to flesh out a design locally with less-than-ideal practices, but don't approve/push/merge a pull request before it's actually up to company standards.

CSS polishing was almost non-existent. I think I started off with decently scoped classes but that definitely devolved as I added more... I recently watched a video on the CSS used in the Facebook redesign, where it's basically a one-property-per-class style, and I think that could have worked very well in this project to simplify the way I styled everything. Some CSS bugs definitely persist and are semi-noticeable, but I can't spend years on this redesign. I'm too spoiled by existing enterprise-level CSS classes/frameworks, so I'm a bit rusty on the basics and I think that shows in my .css files.

React polishing was probably the most important part in my mind during this last stretch. DRY principles were a moderate focus, but again it devolved a little as complexity scaled... Having appropriately scoped / refactored components is really important for having a code base that simultaneously isn't spaghetti AND is quick to pick up / prototype / implement features for the sake of quick feature turnaround. Most of my application of this thought is refactoring buttons and links---the asset card buttons and headers/footers were just kind of quickly implemented and styled since nothing about them needed to work in the first place (at least under my base assumptions). Buttons had a lot of repeated styling and properties that definitely could have been stuck in a single wrapper component for a little less verbosity. Links were just quick `<a/>` tags until refactored into something with consistent style / presentation. 

## Conclusion
I think I hit the main goals I was going for during this project. The redesigned site definitely has a more modern feel. It's less cluttered, and the ways you engage with the content are much more obvious. I tried to keep the similar color scheme (mostly because orange is in fact my favorite color), but there are definitely better palletes out there. Not every endeavor has been executed perfectly of course, but 

## Next Steps
If I were to develop this website redesign further, here are the next steps I would consider:
Implementation of other story sorts (top stories is the only endpoint called at this point), a story page view with comments, user page, possibly an authentication workflow, more coheseive user-based state (which posts are hidden / upvoted already).

Static strings should be replaced by a translation framework for internationalization (react-i18n), accessibility tags need to be added on most components.

In terms of developer workflow, I would need to isolate components a bit further for testing. API calls should be slightly more decoupled from components so it's easier to test both the API and components individually. I would also install SASS and rework a lot of the CSS since it's a little verbose and redundant at the moment...