import React, { Component } from 'react';
import {connect} from "react-redux";
import {removeList,editList} from '../action/action';

 class ToDoList extends Component {
    render() {
        return (
            <div>
            { this.props.ToDoList.map( (el,i)=>(
                <div key={i}>
                    <span onChange={(e)=>this.props.edit(e.target.value,i)} style={{ width: '250px',backgroundColor:'green' }}> 
                      {el.todo}
                    </span>
                    <button onClick={()=>this.props.remove(i)}>Remove</button>
                </div>
            )) }
            </div>
        )
    }
}
const mapStateToProps = state =>({
    ToDoList:state
})

const mapDispatchToProps = dispatch => {
    return{
        remove:payload =>{ dispatch(removeList(payload)) },
        edit:(payload,index)=>{ dispatch(editList(payload,index)) }
    }
}
export default connect (mapStateToProps,mapDispatchToProps)(ToDoList)
