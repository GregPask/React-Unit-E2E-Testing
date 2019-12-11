import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { submitTodo, deleteTodo , inputChanged } from './Actions/actions';


import AddTodo from './JS/AddTodo';
import List from "./JS/List";

// eslint-disable-next-line no-shadow
export const App = ({ submitTodo, inputChanged, user, deleteTodo }) => (
  <div>
    <h2>My App</h2>

    <AddTodo inputChanged={inputChanged} disableBtn ={user.disableAddTodo}  submitTodo={submitTodo} /><hr/>
    <List deleteTodo={deleteTodo} todos={user.todos} />
  </div>
);


const mapStateToProps = (state) => ({
    user: state.user
});


export default connect(mapStateToProps, { submitTodo, deleteTodo, inputChanged })(App);


App.propTypes = {
  submitTodo: PropTypes.func.isRequired,
};
