import React, { Component } from 'react';
import { teacherActions } from '../../store/actions';
import Header from "../../components/atoms/Header";
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import './index.css'


// components 
import TeacherForm from '../../components/atoms/TeacherForm'



function mapStateToProps(state) {
    const teachers = state.teacher.teachers;


    return {
        teachers
    };
}


function mapDispatchToProps(dispatch) {
    return {
        addTeacher: (teacher) => dispatch(teacherActions.addTeacher(teacher))
    };
}


class index extends Component {

    state = {
        modalShown: false
    }

    renderTableData() {
        const { teachers } = this.props;

        return teachers.map((teacher, index) => {
            const { staffNo, firstName, lastName, level, ClassHeld } = teacher;
            return (
                <tr key={index} onClick={()=>this.goToTeacher(teacher)}>
                    <td>{staffNo}</td>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{level}</td>
                    <td>{ClassHeld}</td>
                </tr>
            )
        })
    }

    renderTableHeader() {
        const { teachers } = this.props;

        let header = Object.keys(teachers[0])
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

    addTeacher = (teacher) => {
        const { addTeacher } = this.props;
        addTeacher(teacher);
        this.setState({ modalShown: false })
    }

    goToTeacher = (teacher) => {
        const { history } = this.props;

        history.push({
            pathname: '/teacherandstudents',
            state: { teacher: teacher }
        });
    };

    render() {
        const { modalShown } = this.state;

        return (
            <div>
                <Header {...this.props} openModal={this.openModal} />
                <div>
                    <h1 id='title'>Teachers</h1>
                    <table id='teachers'>
                        <tbody>
                            <tr>{this.renderTableHeader()}</tr>
                            {this.renderTableData()}
                        </tbody>
                    </table>
                    <TeacherForm
                        onSubmit={this.addTeacher}
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