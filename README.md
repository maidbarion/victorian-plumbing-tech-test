<!-- NOTES ON THE PROJECT -->
## Notes On The Project

Hello! Thanks for taking the time to look at this, it's a little basic, but I crossed off a few of those objectives. I was running a bit short on time (recently moved back to the UK), so i'll list off a bunch of improvements I'd make if I had more time.

* Implementing Context API - there was a little bit too much prop drilling for my liking. Redux seems a bit overkill for something this small.
* More indepth error handling on API calls, including UI elements.
* Major styling updates, it's as basic as it comes right now.
* The ITEMS_PER_PAGE const seems a bit out of place, ideally I'd tweak the calculation to handle 'size' from pagination api data.
* Styled components probably wasn't necessary, probably could have utilised a single .css file.
* Remove API key from env file - shouldn't be store FE at all.

<!-- Installation -->
## Installation
yarn install - dependencies: axios, styled-components, typescript (all latest)
Node v18.17.0

You'll need to add a .env file in root...\
REACT_APP_PUBLIC_API_URL=###\
REACT_APP_API_KEY=###

<!-- END -->
## END
Thanks for your time all, and if I don't hear back from you, all the best with the search.

Cheers,

Aaron.