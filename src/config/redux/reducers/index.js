import test from './test'
import { combineReducers } from 'redux'
const reducers = {
    tests : test
}

export default combineReducers(reducers)