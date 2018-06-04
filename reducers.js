import { VisibilityFilters } from './actions';

const intialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
}

function todoApp(state, action) {
    if (typeof state === 'undefined') {
        return intialState;
    }
    return state;
}