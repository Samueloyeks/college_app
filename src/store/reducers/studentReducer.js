import { studentConstants } from '../constants';

const ADD_STUDENT = studentConstants.ADD_STUDENT


export function studentReducer(state = {
    loading: false,
    students: [
        { studentNo: 'Stud001', firstName: 'Saheed', lastName: 'Ojo', Class: 'JSS 1' },
        { studentNo: 'Stud002', firstName: 'Micheal', lastName: 'Adeola', Class: 'JSS 2' },
        { studentNo: 'Stud003', firstName: 'Sola', lastName: 'Sade', Class: 'SSS 1' },
        { studentNo: 'Stud004', firstName: 'Abd-Rahmon', lastName: 'Salah', Class: 'JSS 1' },
        { studentNo: 'Stud005', firstName: 'Gbenga', lastName: 'Akin', Class: 'JSS 1' },
        { studentNo: 'Stud006', firstName: 'Folu', lastName: 'Funke', Class: 'SSS 2' },
        { studentNo: 'Stud007', firstName: 'Queenet', lastName: 'Sunday', Class: 'JSS 2' },
        { studentNo: 'Stud008', firstName: 'Oganga', lastName: 'Prince', Class: 'JSS 3' },
        { studentNo: 'Stud009', firstName: 'Samuel', lastName: 'Alade', Class: 'SSS 1' },
        { studentNo: 'Stud010', firstName: 'Micheal', lastName: 'Omowon', Class: 'SSS 1' },
        { studentNo: 'Stud011', firstName: 'Samuel', lastName: 'Akinsola', Class: 'JSS 3' },
        { studentNo: 'Stud012', firstName: 'John', lastName: 'Laureta', Class: 'SSS 3' },
        { studentNo: 'Stud013', firstName: 'Sunday', lastName: 'Smart', Class: 'JSS 1' },
        { studentNo: 'Stud014', firstName: 'Abiodun', lastName: 'Salaudeen', Class: 'SSS 1' },
        { studentNo: 'Stud015', firstName: 'Akeem', lastName: 'Adekola', Class: 'JSS 2' },
        { studentNo: 'Stud016', firstName: 'Alarape', lastName: 'Adebayo', Class: 'SSS 3' },
        { studentNo: 'Stud017', firstName: 'Yusuf', lastName: 'Ashir', Class: 'SSS 3' },
        { studentNo: 'Stud018', firstName: 'Sheriff ', lastName: 'Adesola', Class: 'JSS 2' },
        { studentNo: 'Stud019', firstName: 'Roqeeb', lastName: 'Idayat', Class: 'JSS 3' },
        { studentNo: 'Stud020', firstName: 'Isiaq', lastName: 'Kayode', Class: 'JSS 1' }
    ]
}, action) {
    switch (action.type) {
        case ADD_STUDENT:
            return {
                ...state,
                // loading: true,
                students: [...state.students, action.data]
            }
        default:
            return state
    }
}
