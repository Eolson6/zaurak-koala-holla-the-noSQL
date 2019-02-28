import React, { Component } from 'react';
import { connect } from 'react-redux';

class KoalaTable extends Component {
    componentDidMount() {
        this.getKoalas();
    }

    getKoalas = () => {
        this.props.dispatch({type: 'GET_KOALAS'})
    }
    render() {
        return (
            <div>
                <h2>Koala Table</h2>
                {JSON.stringify(this.props)}
            </div>
        )
    }
}

const mapStoreToProps = reduxStore => ({
    reduxStore: reduxStore
})
export default connect(mapStoreToProps)(KoalaTable);