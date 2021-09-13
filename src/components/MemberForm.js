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
        <div class="login-form">
            <form class="login-form__content" onSubmit={this.handleSubmit}>

            <label class="login-form__input" > Fist Name: </label>
            <input type='text' value={this.state.first_name} onChange={this.handleChange} name='first_name'/> 

            <br/>

            <label class="login-form__input" > Last Name: </label>
            <input type='text' value={this.state.last_name} onChange={this.handleChange} name='last_name'/>

            <br/>

            <label class="login-form__input" > age: </label>
            <input type='integer' value={this.state.age} onChange={this.handleChange} name='age'/>

            <br/>

            <label class="login-form__input" > relationship: </label>
            <input type='text' value={this.state.relationship} onChange={this.handleChange} name='relationship'/>


            <input class="login-form__button" type='submit' value='create member'/>

            </form>
        </div>
        )
    }
}
export default connect(null, { addMember })(MemberForm)