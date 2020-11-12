import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import { set_data } from './../../store/action'


class Home extends React.Component{

    static getDerivedStateFromProps (props,state){
        console.log(props)
        return{

        }
    }
  
    render(){
        let users = { name: "Afaque" , email : "afaque@gmail.com" }
        console.log('Home Props ==> ',this.props)
        return(
            <div>
                <h1>Home</h1>
                <button onClick={()=>this.props.set_data(users)}>Set data</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users : state.users
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return{
    set_data : (data) => dispatch(set_data(data))
  
    }
  }

export default connect(mapStateToProps , mapDispatchToProps)(Home);