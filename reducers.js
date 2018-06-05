// import { 
//     VisibilityFilters, 
//     SET_VISIBILITY_FILTER,
//     ADD_TODO,
//     SET_VISIBILITY_FILTER 
// } from './actions';
const actions = require('./actions');
// import { combineReducers } from 'redux';
const redux = require('redux');

const { SHOW_ALL } = actions.VisibilityFilters;


function todos(state = [], action) {
    switch (action.type) {
        case actions.ADD_TODO: 
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ];
        case actions.TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    });
                }
                return todo;
            });
        default: return state;
    }
}

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case actions.SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

const todoApp = redux.combineReducers({
    visibilityFilter,
    todos
})

// export default todoApp;
module.exports = {
    todoApp
}