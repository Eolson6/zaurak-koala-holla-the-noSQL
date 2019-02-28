import React, { Component } from 'react';
import { connect } from 'react-redux';

class KoalaForm extends Component {

    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            gender: '',
            age: 0,
            notes: '',

        };
        this.state = this.initialState;
    }

    handleChange = event => {
        console.log('handle change', this.state);

        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    createKoala = ()=> {
        const action = {type:'ADD_KOALAS', payload: this.state};
        this.props.dispatch(action);
    }
    
    render() {

        const {name, gender, age, notes} = this.state;
        return (
            <div>
                <h2>Koala Form</h2>
                <label>Name</label>
                <input
                    id="name"
                    name="name"
                    value={name}
                    onChange={this.handleChange} />
                <br></br> 
                <label>Gender</label>
                <input
                    id="gender"
                    name="gender"
                    value={gender}
                    onChange={this.handleChange} />
                <br></br> 
                <label>Age</label>
               
                <input
                    id="age"
                    name='age'
                    value={age}
                    onChange={this.handleChange} />
                <br></br> 
                <lable>Notes</lable>
               
                <input
                    id="notes"
                    name="notes"
                    value={notes}
                    onChange={this.handleChange} />
                <br></br> 
                <input 
                    type="submit"
                    value="Add Koala"
                    onClick={this.createKoala} />

            </div>
        )
    }
}

const mapStoreToProps = reduxStore => ({
    reduxStore: reduxStore
})
export default connect(mapStoreToProps)(KoalaForm);