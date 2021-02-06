import React, { Component } from "react";
import { authActions } from '../../store/actions';
import { connect } from 'react-redux';




function mapStateToProps(state) {
    const isAuthenticated = state.auth.isAuthenticated;


    return {
        isAuthenticated
    };
}


function mapDispatchToProps(dispatch) {
    return {
        login: () => dispatch(authActions.login())
    };
}




class Login extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(e) {
        e.preventDefault();
        const { login } = this.props;

        login();
    }

    render() {
        return (
            <div className="App">
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <div className="container">
                        <p className="navbar-brand" to={"/"}>College App</p>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        </div>
                    </div>
                </nav>
                <form>
                    <h3>Sign In</h3>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <button onClick={this.handleSubmit} type="submit" className="btn btn-primary btn-block">Submit</button>
                    <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p>
                </form>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);