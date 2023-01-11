# extracting-state-logic-into-a-reducer

In this documentation read, I learnt:

- to use a `reducer function` & `useReducer()`
- use a reducer to contain all the state of a complex component. Define the reducer function outside your component and move all the component's state into it.
- `reducers are a different way to handle state`
- `3 steps of migrating from useState to useReducer`:
  - [x] move from setting state to dispatching actions
  - [x] write a reducer function
  - [x] use the reducer from your component
- use a reducer to `dispatch actions` in event handlers using `dispatch()`instead of setting state. The state update logic will be held in your reducer function itself
- instead of event handlers setting state, they dispatch actions (of the user's intent)
- you pass an `action object` to the dispatch function. It should contain the minimal information about what happened. It contains a `type` property specific to a component that `carries a string describing what happened`. Additonal info is added in other action property fields
- `a reducer function holds all the state logic`. It also takes 2 arguments: the `state` & the `action` object and finally returns the next state
- the state returned is what React uses to set the state
- you can use if statements in reducers but it's more conventional to use `switch statements` since they're easier to read at a glance
- when using switch statements, make sure to wrap each case block with curly braces {} to avoid clashing with other cases. `Each case block has to return something`. A case that has no return statement is skipped (fall through to the next case)
- to use useReducer, you have to import it just like other hooks
- just like useState, `usereducer() hook definition is an array of an initial state and a dispatch function to set the state`. i.e. it returns: `a stateful value` & `a dispatch function` to disptch actions to the reducer
- `useReducer` hook takes two arguments:
  - a reducer function
  - an initial state (value)
- 2 important tips on reducers:
  - [x] reducers must be pure : they should not perform any calculations outside the component during rendering & should update objects & arrays without mutating them
  - [x] each action describes a single user interaction even if it leads to multiple changes in data
- you can use reducer functions with `Immer` (useImmerReducer) to make the code more concise
