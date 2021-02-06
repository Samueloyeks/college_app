import React, { Component } from 'react';
import { studentActions } from '../../store/actions';
import Header from "../../components/atoms/Header";
import { connect } from 'react-redux';
import './index.css'


// components 
import StudentForm from '../../components/atoms/StudentForm'



function mapStateToProps(state) {
    const students = state.student.students;


    return {
        students
    };
}


function mapDispatchToProps(dispatch) {
    return {
        addStudent: (student) => dispatch(studentActions.addStudent(student))
    };
}


class index extends Component {

    state = {
        modalShown: false
    }

    renderTableData() {
        const { students } = this.props;

        return students.map((student, index) => {
            const { studentNo, firstName, lastName, Class } = student;
            return (
                <tr key={index}>
                    {/* <td>{index + 1}</td> */}
                    <td>{studentNo}</td>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{Class}</td>
                </tr>
            )
        })
    }

    renderTableHeader() {
        const { students } = this.props;

        let header = Object.keys(students[0])
        return header.map((key, index) => {
            return (
                <th key={index}>{this.formatCamelCase(key).toUpperCase()}</th>
            )
        })
    }

    formatCamelCase(text) {
        return text.replace(/([A-Z])/g, ' $1')
            .replace(/^./, function (str) { return str.toUpperCase(); })
    }

    openModal = () => {
        this.setState({ modalShown: true })
    }

    addStudent = (student) => {
        const { addStudent } = this.props;
        addStudent(student);
        this.setState({ modalShown: false })
    }

    render() {
        const { modalShown } = this.state;

        return (
            <div>
                <Header {...this.props} openModal={this.openModal} />
                <div>
                    <h1 id='title'>Students</h1>
                    <table id='students'>
                        <tbody>
                            <tr>{this.renderTableHeader()}</tr>
                            {this.renderTableData()}
                        </tbody>
                    </table>
                    <StudentForm
                        onSubmit={this.addStudent}
                        show={modalShown}
                        onHide={() => this.setState({ modalShown: false })}
                    />
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(index);