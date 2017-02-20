
import React, { Component } from 'react';
import ListBox from './ListBox';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as ListActions from '../actions'

class App extends Component{

  createList() {
    this.props.actions.createList();
  }

    render() {
        let {lists} = this.props;
        console.log(this.props);
        let allLists = lists.map((list)=>{
                        return <ListBox key={list.listId} list={list}  {...this.props.actions}/>})

        return (
            <div>
                {allLists}
                <button className="btn-primary" onClick={this.createList.bind(this)}>{"Add List"}</button>
            </div>
        );
    }

}

function mapStateToProps(state) {
  return {
    lists: state.lists
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ListActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)