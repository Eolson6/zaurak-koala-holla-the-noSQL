import React, { Component } from 'react';
import { connect } from 'react-redux';

class KoalaForm extends Component {
    
    render() {
        return (
            <div>
                <h2>Koala Form</h2>
            </div>
        )
    }
}

const mapStoreToProps = reduxStore => ({
    reduxStore: reduxStore
})
export default connect(mapStoreToProps)(KoalaForm);