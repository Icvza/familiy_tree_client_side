import React, { Component } from 'react'
import  { connect } from 'react-redux'
import { fetchMembers } from '../actions/memberActions'
import Member from './Member'
import MemberForm from './MemberForm'

class Members extends Component{

    componentDidMount() {
        this.props.fetchMembers()
    }

    render () {

        return (
            <div id='Member_card'>
                {this.props.members.length === 0 ? <MemberForm /> : 
                this.props.members.map(m => <Member delete={this.props.delete} {...m} />) }
            </div>
        )
    }

}


//how we connect to the store and grab the state 
const mapStateToProps = (state) => {
    return { members: state.members}
}


//connect to the store and change the sate and grab the state form the store 
export default connect(mapStateToProps, { fetchMembers })(Members)



