import { teacherConstants } from '../constants';
import { alertActions } from './alertActions';




export const teacherActions = {
    addTeacher
};

function addTeacher(teacher) {
    return dispatch => {
        dispatch(addTeacher(teacher));
        dispatch(alertActions.success('Teacher Added'));
    };

    function addTeacher(data) { return { type: teacherConstants.ADD_TEACHER, data } }
}
