import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import MainLayout from "./main/MainLayout";
import Toastify from "../components/toastify";


class LayoutManager extends Component {

    getLayout = (pathname) => {
        return 'main'
    }

    getLayouts = () => {
        return {
            main: MainLayout,
        }
    }

    render() {
        const {children, location: {pathname}} = this.props;
        const Layout = this.getLayouts()[this.getLayout(pathname)];
        return (
            <>
                <Layout>
                    <Toastify />
                    {children}
                </Layout>
            </>
        );
    }
}

export default withRouter(LayoutManager);