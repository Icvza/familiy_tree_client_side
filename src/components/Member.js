import React from 'react';
import  { connect } from 'react-redux'
import { deleteMember } from '../actions/memberActions';

    function Member(props) {
        return (  
            <div id='mem_wrapper'>
                <p>{props.first_name} <br/>
                {props.last_name}<br/>
                {props.age}</p>

                <button onClick={() => props.deleteMember({ type: 'DELETE_MEMBER', member: props.id })}>DELETE</button>
            </div>
        );
        
    }




export default connect(null, { deleteMember }) (Member)
//export default connect(mapStateToProps, { fetchMembers })(Members)