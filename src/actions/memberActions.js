
export const fetchMembers = () => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/members')
        .then(resp => resp.json())
        .then(members => dispatch({ type: "FETCH_MEMBERS", payload: members}))
    }
}


export const addMember = (member) => {
    return dispatch => {
        fetch('http://127.0.0.1:3000/members', {
            method: 'POST',
            body: JSON.stringify(member),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(member => dispatch({ type: 'ADD_MEMBER', payload: member}))
    }
}

// export const deleteMember = (member) => {
//     return dispatch => {
//         fetch('http://127.0.0.1:3000/members/', {
//             method: 'DELETE',
//             body: JSON.stringify(member),

//         })
//         .then(resp => resp.json())
//         .then(member => dispatch({ type: 'DELETE_MEMBER', payload: member}))
//     }
// }

export const deleteMember = (member) => {
    return (dispatch) => {
        fetch(`http://127.0.0.1:3000/members/${member.member}` , {
            method: "DELETE" })
            .then(resp => resp.json())
            .then(member=> { dispatch({ type: "DELETE_MEMBER", payload: member })
        })
    }
}



