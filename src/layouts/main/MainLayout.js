import React from 'react';
import {connect} from "react-redux";
import {get} from "lodash";
import Topbar from "../../components/topbar";
import Navbar from "../../components/navbar";


const MainLayout = ({children, user}) => {
    return (
        <>
            <Topbar />
            <Navbar />
            {children}
        </>
    );
};
const mapStateToProps = (state) => {
    return {
        user: get(state, 'auth.user', {})
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
