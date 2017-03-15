# Lazy Mad Libbers (a Zapo Project :neckbeard: :trollface:)

## User Stories

As a user who loves mad libs but has a terrible time coming up with words to use, I want to be able to:

> See a list of suggested words that match the madlib requirements i.e. adjectives, nouns etc.

> Be able to retain autonomy in terms of choosing what letter(s) I want the word to begin with.

As a student who is learning the differences between nouns, adjectives, verbs and adverbs, I want to:

> See suggested nouns, adjectives, verbs and adverbs when I input letters so I can get more comfortable with the differences.

> Learn in an interactive and fun way.

## User Acceptance Criteria

- [ ] When I start typing each of my madlib words, I want to see at least a few suggestions for words I can pick.
- [ ] I want to be able to input my own word if I don't like the suggested ones.
- [ ] I want to be notified if I've been extra lazy and missed out an input or two.
- [ ] I want the suggestions to change dynamically if I add or delete characters.
- [ ] I want the story to be hidden until I submit the words so the game isn't ruined.
- [ ] When I submit, I no longer want to see the input fields so the page is nice and clear.
- [ ] I want to be able to tab through and have a similar experience if I'm a blind user and using a screen reader.


## Architecture

## Stretch goals

- If our lazy user stops being so lazy, or happens to be a developer, he/she might hunt down the story in the dev tools and ruin the game!! Our stretch goal would be to **fix this security issue** by putting the story in the back end.
- Our game initially won't let a user submit their mad lib words until all inputs have been filled. For the ultimate lazy mad libber game, we could improve on this by **returning random words for inputs that have been left blank**.
- Our lazy user will probably get bored of the same mad lib (he/she has a short attention span). **We could generate different mad libs on refresh/reset**.
