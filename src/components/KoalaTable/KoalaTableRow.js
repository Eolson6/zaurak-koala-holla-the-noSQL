import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class KoalaTableRow extends Component {

    transferKoala = () => {
        console.log('button works', this.props.koala);
        axios({
            method: 'PUT',
            url: 'api/koala/',
            data: {ready_to_transfer: true,
                    _id: this.props.koala._id
            }
        }).then((response)=> {
        }).catch((error)=>{
            console.log('in put ready to transfer error', error);
            
        })
    }

    render() {
        return (
            <tr>
                <td>{this.props.koala._id}</td>
                <td>{this.props.koala.name}</td>
                <td>{this.props.koala.gender}</td>
                <td>{this.props.koala.age}</td>
                <td>{this.props.koala.ready_to_transfer.toString()}</td>
                <td>{this.props.koala.notes}</td>
                <td>
                    <button onClick={this.transferKoala}>Transfer</button>
                </td>
            </tr>
        )
    }
}

const mapStoreToProps = reduxStore => ({
    reduxStore: reduxStore
})
export default connect(mapStoreToProps)(KoalaTableRow);