:moyai: Rock :page_with_curl: Paper :scissors: Scissors
===
This is Guillaume's Rock, Paper, Scissors game:

Main functionalities:
- the player will be presented the choices (rock, paper and scissors)
- the player can choose one option
- the game will choose a random option
- a winner will be declared

Technologies used
----
- JavaScript
- ES6 syntax
- create-react-app
- React
- React-Dom
- React-router & React-router-dom
- PropTypes
- HTML
- CSS
- Flexbox
- Jest

How to run it
----
```
git clone git@github.com:GBouffard/rock-paper-scissors.git
cd rock-paper-scissors
./build.sh
```
PS: the script will ask for chosen options; Press a to run all tests, then q to quit the test suite.


What I learnt and what to improve
----
- I first scaffolded the app through react-create-app and then added the logic with unit tests.
- I first started with a 1 player game.
- I used the React-router Redirect command for the first time.
- the enclosed shell script as simple as it seems is the first shell script that I ever wrote.
- the logic of the game is unit tested however for some reasons enzyme, react-test-renderer and Chai conflicted; answers found on SO and Github didn't resolve so after a while, instead of blocking I had to skip integration tests and delay that part of the debugging to later. I have investigated other testing frameworks to use for functional tests but didn't have the time to try them yet.
- the React code is gearing towards re-usability but due to the time constraint, can be improved.
- the CSS was also rushed due to time constraints. It will be improved as I keep this project open for now.
- sass or less compiling could also be added, with better BEM terminology.
- the views are made for desktop clients only at this point; responsive design still needs to be done.
- A continuous integration tool could also be added
- This project is still open and I will keep improving it as I find the time to.
