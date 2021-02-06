import { combineReducers } from 'redux';

const { teacherReducer } = require('./teacherReducer');
const { studentReducer } = require('./studentReducer');
const { alertReducer } = require('./alertReducer');
const { authReducer } = require('./authReducer');





const rootReducer = combineReducers({
    student: studentReducer,
    alert: alertReducer,
    teacher: teacherReducer,
    auth:authReducer
});

export default rootReducer;