// import { createStore } from 'redux';
const redux = require('redux');
// import todoApp from './reducers';
const reducers = require('./reducers');
const store = redux.createStore(reducers.todoApp);

// import {
//     addTodo,
//     toggleTodo,
//     setVisibilityFilter,
//     VisibilityFilters
//   } from './actions'

const actions = require('./actions');
  
  // Log the initial state
  console.log(store.getState())
  
  // Every time the state changes, log it
  // Note that subscribe() returns a function for unregistering the listener
  const unsubscribe = store.subscribe(() =>
    console.log(store.getState())
  )
  
  // Dispatch some actions
  store.dispatch(actions.addTodo('Learn about actions'))
  store.dispatch(actions.addTodo('Learn about reducers'))
  store.dispatch(actions.addTodo('Learn about store'))
  store.dispatch(actions.toggleTodo(0))
  store.dispatch(actions.toggleTodo(1))
  store.dispatch(actions.setVisibilityFilter(actions.VisibilityFilters.SHOW_COMPLETED))
  
  // Stop listening to state updates
  unsubscribe()