import React from 'react';
import Sidebar from "./Sidebar";
import Header from "../atoms/Header";


function Layout(props) {
    return (
        <div>
            {/* <Header {...props}/>  */}
            <div style={{ display: "flex" }}>
                <Sidebar history={props.history}/>
                <div style={{ width: '100%' }}>
                    {/* <Nav /> */}
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Layout;