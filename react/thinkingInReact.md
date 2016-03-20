## [Thinking In React](https://facebook.github.io/react/docs/thinking-in-react.html)

* When beginning a React project, make wireframes of your product and break down the product into possible React components.

* Then build a static version of the product in React. This involves a lot of typing but little thinking

* Next, implement the interactivity.
 * First, do the UI and data model but without the interactivity. I.e. it takes in data at the top and places it where it needs to be in the components. But it doesn't have state (yet!) The only method that your components should have at this point is `render ()`
 * Then try with interactivity, adding state that can be changed, and methods that can change it and which are passed down to components.
 * Deciding what your state should be is important - think of the *minimal set of mutable state that your app needs*. Don't include anything more than that.
 * Go through all the pieces of data in your project and figure out which need to be state:
  1. Is it passed in from a parent via props? If so, it probably isn't state.
  2. Does it change over time? If not, it probably isn't state.
  3. Can you compute it based on any other state or props in your component? If so, it's not state.
 * You also need to decide where the state will live (which component will it be the state of?) Here are some steps to follow: 
  For each piece of state in your application:
    1. Identify every component that renders something based on that state.
    2. Find a common owner component (a single component above all the components that need the state in the hierarchy).
    3. Either the common owner or another component higher up in the hierarchy should own the state.
    4. If you can't find a component where it makes sense to own the state, create a new component simply for holding the state and add it somewhere in the hierarchy above the common owner component.