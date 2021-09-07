
import './App.css';
import Members from './components/Members';
//import MemberForm from './components/MemberForm';
import { connect } from 'react-redux'
import NavBar from './components/NavBar'
import Router from './components/router'

function App() {


    return (
    <div>
        <NavBar />
        <Router />
    </div>
  );
}

const mapStateToProps = (state) => {
  return { members: state.members}
}

export default connect(mapStateToProps)(App);
//<Members />