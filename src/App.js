import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import Layout from './components/layouts/Layout';

// components 
import Login from './views/login';
import Students from './views/students';
import Teachers from './views/teachers';
import StudentsAndTeachers from './views/studentsAndTeachers';
import TeacherAndStudents from './views/teacherAndStudents';




function mapStateToProps(state) {
  const isAuthenticated = state.auth.isAuthenticated;


  return {
    isAuthenticated
  };
}


function mapDispatchToProps(dispatch) {
  return {

  };
}


function App(props) {
  const { isAuthenticated } = props;

  return (
    <BrowserRouter>
      {
        !isAuthenticated ?
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
                <Route exact path='/' component={Login} />
              </Switch>
            </div>
          </div>
          :
          <Route render={(props) => (
            <Layout {...props} >
              <Switch>
                <Route path="/" exact component={Students} />
                <Route path="/students" exact component={Students} />
                <Route path="/teachers" component={Teachers} />
                <Route path="/studentsandteachers" component={StudentsAndTeachers} />
                <Route path="/teacherandstudents" component={TeacherAndStudents} />
              </Switch>
            </Layout>
          )} />
      }
    </BrowserRouter>


  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
