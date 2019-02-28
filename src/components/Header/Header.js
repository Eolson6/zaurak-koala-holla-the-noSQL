import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {

    render() {
        return (
            <div>
                <h2>Koala Header</h2>
            </div>
        )
    }
}

const mapStoreToProps = reduxStore => ({
    reduxStore: reduxStore
})
export default connect(mapStoreToProps)(Header);