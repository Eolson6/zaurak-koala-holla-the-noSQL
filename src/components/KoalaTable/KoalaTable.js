import React, { Component } from 'react';
import { connect } from 'react-redux';
import KoalaTableRow from './KoalaTableRow';

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
                <table>
                    <thead>
                        <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>age</th>
                        <th>ready_to_transfer</th>
                        <th>notes</th>
                        <th>Click to transfer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.reduxStore.koalas.map((koala) => {
                           return  <KoalaTableRow key={koala.id} koala={koala} />
                            
                           
                        })}
                    </tbody>
                </table>
               
            </div>
        )
    }
}

const mapStoreToProps = reduxStore => ({
    reduxStore: reduxStore
})
export default connect(mapStoreToProps)(KoalaTable);