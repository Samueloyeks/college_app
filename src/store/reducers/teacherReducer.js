import { teacherConstants } from '../constants';

const ADD_TEACHER = teacherConstants.ADD_TEACHER


export function teacherReducer(state = {
    loading: false,
    teachers: [
        { staffNo: 'Staff001', firstName: 'Micheal', lastName: 'Oyinye', level: 'Level 7', ClassHeld: 'JSS 1' },
        { staffNo: 'Staff002', firstName: 'Emmanuel', lastName: 'Joseph', level: 'Level 6', ClassHeld: 'JSS 2' },
        { staffNo: 'Staff003', firstName: 'Tunde', lastName: 'Akinola', level: 'Level 7', ClassHeld: 'JSS 3' },
        { staffNo: 'Staff004', firstName: 'Ali', lastName: 'Hakeem', level: 'Level 8', ClassHeld: 'SSS 3' },
        { staffNo: 'Staff005', firstName: 'Sunday', lastName: 'Favour', level: 'Level 9', ClassHeld: 'SSS 2' },
        { staffNo: 'Staff006', firstName: 'Lukman', lastName: 'Abdullah', level: 'Level 10', ClassHeld: '' },
        { staffNo: 'Staff007', firstName: 'Folahan', lastName: 'Hameed', level: 'Level 11', ClassHeld: '' },
        { staffNo: 'Staff008', firstName: 'Ridwan', lastName: 'Adisa', level: 'Level 12', ClassHeld: '' },
        { staffNo: 'Staff009', firstName: 'Monday', lastName: 'Joseph', level: 'Level 8', ClassHeld: 'SSS 1' }
    ]
}, action) {
    switch (action.type) {
        case ADD_TEACHER:
            return {
                ...state,
                // loading: true,
                teachers: [...state.teachers, action.data]
            }
        default:
            return state
    }
}
