import React, { Component } from 'react';
import { connect } from 'react-redux';

class KoalaTableRow extends Component {



    render() {
        return (
            <tr>
                <td>{this.props.koala.id}</td>
                <td>{this.props.koala.name}</td>
                <td>{this.props.koala.gender}</td>
                <td>{this.props.koala.age}</td>
                <td>{this.props.koala.ready_to_transfer.toString()}</td>
                <td>{this.props.koala.notes}</td>
                <td>
                    <button>Transfer</button>
                </td>
            </tr>
        )
    }
}

const mapStoreToProps = reduxStore => ({
    reduxStore: reduxStore
})
export default connect(mapStoreToProps)(KoalaTableRow);