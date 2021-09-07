import React, { Component } from 'react'
import { addMember } from'../actions/memberActions'
import { connect } from 'react-redux'


class MemberForm extends Component{

    state = {
        first_name: '',
        last_name: '',
        age: '',

    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState (
            {
                [name]: value
            }
        )
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addMember(this.state)
        this.setState({
            first_name: '',
            last_name: '',
            age: '',
        }
        )
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>

            <label> Fist Name: </label>
            <input type='text' value={this.state.first_name} onChange={this.handleChange} name='first_name'/> 

            <br/>

            <label> Last Name: </label>
            <input type='text' value={this.state.last_name} onChange={this.handleChange} name='last_name'/>

            <br/>

            <label> age: </label>
            <input type='integer' value={this.state.age} onChange={this.handleChange} name='age'/>

            <br/>

            <label> relationship: </label>
            <input type='text' value={this.state.relationship} onChange={this.handleChange} name='relationship'/>


            <input type='submit' value='create member'/>

            </form>
        )
    }
}
export default connect(null, { addMember })(MemberForm)