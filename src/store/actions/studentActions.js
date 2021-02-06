import { studentConstants } from '../constants';
import { alertActions } from './alertActions';




export const studentActions = {
    addStudent
};

function addStudent(student) {
    return dispatch => {
        dispatch(addStudent(student));
        dispatch(alertActions.success('Student Added'));
    };

    function addStudent(data) { return { type: studentConstants.ADD_STUDENT, data } }
}
