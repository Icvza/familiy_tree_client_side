import React, { Component } from 'react'
import  { connect } from 'react-redux'
import { fetchMembers } from '../actions/memberActions'

class Members extends Component{

    componentDidMount() {
        this.props.fetchMembers()
    }

    render () {
        return (
            <div>
                Members COmp
            </div>
        )
    }

}

export default connect(null, { fetchMembers })(Members)