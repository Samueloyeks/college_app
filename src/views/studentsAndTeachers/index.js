import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css'





function mapStateToProps(state) {
    const students = state.student.students;
    const teachers = state.teacher.teachers;

    return {
        students,
        teachers
    };
}


function mapDispatchToProps(dispatch) {

    return {

    };
}


class index extends Component {

    renderTableData() {
        const { students, teachers } = this.props;
        let studentsInfo = JSON.parse(JSON.stringify(students))

        for (let i = 0; i < studentsInfo.length; i++) {
            let teacher = teachers.find(teacher => {
                return teacher.ClassHeld === studentsInfo[i].Class;
            })

            studentsInfo[i].classTeacherNo = teacher.staffNo;
            studentsInfo[i].classTeacherFullName = teacher.firstName + ' ' + teacher.lastName;
        }
        
        return studentsInfo.map((student, index) => {
            const { studentNo, firstName, lastName, Class, classTeacherNo, classTeacherFullName } = student;
            return (
                <tr key={index}>
                    <td>{studentNo}</td>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{Class}</td>
                    <td>{classTeacherNo}</td>
                    <td>{classTeacherFullName}</td>
                </tr>
            )
        })
    }

    renderTableHeader() {
        // const { students } = this.props;

        // let header = Object.keys(students[0])
        // return header.map((key, index) => {
        return (
            <tr>
                <th>STUDENT NO</th>
                <th>FIRST NAME</th>
                <th>LAST NAME</th>
                <th>CLASS</th>
                <th>CLASS TEACHER NO</th>
                <th>CLASS TEACHER FULL NAME</th>

            </tr>
        )
        // })
    }


    render() {

        return (
            <div>
                <div>
                    <h1 id='title'>Students with Teachers</h1>
                    <table id='students'>
                        <tbody>
                            {this.renderTableHeader()}
                            {this.renderTableData()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(index);