import { connect } from 'react-redux';
import Component from './TasksPge.jsx';
import * as actions from './actions.js';
import * as selectors from './selectors';

const mapStateToProps = state => ({
    tasks: selectors.getTasks(state), 
});

const mapDispatchToProps = dispatch => ({
    saveTask: payload => dispatch(actions.saveTask(payload)),
    deleteTask: payload => dispatch(actions.deleteTask(payload)),
    checkedTask: payload => dispatch(actions.checkedTask(payload)),
});

export default connect (mapStateToProps, mapDispatchToProps)(Component);