import Component from './TasksPge';
import * as actions from './actions.js';
import * as selectors from './selectors';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    tasks: selectors.getTasks(state), 
});

const mapDispatchToProps = dispatch => ({
    saveTask: payload => dispatch(actions.saveTask(payload)),
});

export default connect (mapStateToProps, mapDispatchToProps)(Component);