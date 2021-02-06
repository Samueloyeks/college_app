import React, { useState, useEffect } from 'react';
import './index.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';
import { authActions } from '../../store/actions';
import { useHistory } from "react-router-dom";
import UserAvatar from 'react-user-avatar';
import { Button } from 'react-bootstrap'





function mapStateToProps(state) {

    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {
        logout: () => dispatch(authActions.logout()),
    };
}



const Header = ({ props, openModal }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    let history = useHistory();


    const handleLogout = () => {
        history.push("/");
        props.logout();
    }

    const goToEdit = () => {
        history.push("/edit-profile");
    }

    return (
        <div className='header'>
            <div style={{ display: 'inline', float: 'right' }}>
                <Button className='add-button' onClick={openModal}>Add</Button>

                <Dropdown isOpen={dropdownOpen} toggle={toggle} className='avatar-dropdown'>
                    <DropdownToggle>
                        <UserAvatar
                            className='user-avatar'
                            size="28"
                            name="Demo User"
                        />
                    </DropdownToggle>
                    <DropdownMenu right>
                        <div style={{ textAlign: 'center' }}>
                            <UserAvatar
                                className='user-avatar'
                                size="50"
                                name="Demo User"
                            />
                            <DropdownItem divider />
                            <DropdownItem onClick={() => handleLogout()}>Sign out</DropdownItem>
                        </div>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </div>
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);