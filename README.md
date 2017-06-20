React Redux koans
=========================

This is an exercise based on unit tests to help you learn Redux. This exercise is designed and crafted with love by <a href="http://reactjs.academy">ReactJS.Academy</a>. We've called the app you are about to fix "Brewery JS". You'll see why once you fix it, we hope you like it.

## How to install

- `git clone git@github.com:leanjscom/thinking-in-redux.git`
- `cd react-redux-koans`
- `npm i`
- Don't do `npm start` because you need to fix the app before

## First part of the exercise, fix the app.

We have written some unit tests for the relevant code. Each unit test sits side by side with the code it's testing. Example src/actions/index.js unit tests are in src/actions/index.spec.js

The idea is simple, you should execute our unit tests and fix the errors. Once all the code passes the unit tests, you are able to start the app by doing `npm start`.

In order to make it easier to understand Redux we have created a simplified version of `redux` and `react-redux`. We have some bugs in our simplified version of `redux`and `react-redux` that you should fix. The unit tests will help you fix the app and learn by "fixing".

- execute `npm test`

## Second part of the exercise, improve the app.

1. Replace our simplified version of `redux` and `react-redux` with https://github.com/reactjs/redux and https://github.com/reactjs/react-redux now that you've understood how it works. The official ones have cooler features that you should use ;)

2. When we add the same beer to the basket twice we get an error in the browser's console. We suggest you try the following fix, when a beer is added to the basket it should be removed from the List of beers you can buy.

3. Move the state of components/App.js (this.state.isSideMenuOpen) to the store.

4. When a beer is added to the basket, the side menu with the basket should be opened.

5. EXTRA BONUS! There is a button in the Basket component that should remove the beer from the basket. Implement the button with its corresponding reducer and actions. When a beer is removed from the basket it should be available in the main list so it can be added to the basket again.

## License

This material is available for private, non-commercial use under the [GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html).
