import React, { Component } from 'react';
import { connect } from 'react-redux';

class KoalaTable extends Component {

    render() {
        return (
            <div>
                <h2>Koala Table</h2>
            </div>
        )
    }
}

const mapStoreToProps = reduxStore => ({
    reduxStore: reduxStore
})
export default connect(mapStoreToProps)(KoalaTable);