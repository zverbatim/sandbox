import {connect} from "react-redux";
import {setVisibilityFilter, getVisibleTodos} from "../actions";
import Link from "../components/Link";

const mapStateToProps = (state, ownProps) => ({
    current: ownProps.filter === state.visibilityFilter,
    count: getVisibleTodos(state.todos, ownProps.filter).length
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(setVisibilityFilter(ownProps.filter))
    }
});

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

export default FilterLink