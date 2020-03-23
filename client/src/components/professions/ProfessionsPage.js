import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router-dom";

import ProfessionList from "./ProfessionList";
import * as professionActions from "../../actions/professionActions";
import Spinner from "../common/Spinner";

//Most of the time : Class components are used for container components and functional components for presentational
class ProfessionsPage extends React.Component {
  state = {
    redirectToAddProfessionPage: false
  };

  // API calls should be made in component Did Mount
  componentDidMount() {
    const { bindActions } = this.props;
    bindActions.getProfessions();
  }
  render() {
    return (
      <div>
        {this.state.redirectToAddProfessionPage && <Redirect to="/profession" />}
        {this.props.loading ? <Spinner/> : (
        <>
        <button
          onClick={() => this.setState({ redirectToAddProfessionPage: true })}
        >
          Add Profession
        </button>
        <ProfessionList professionsList={this.props.professionsList} />
        </>
        ) }
      </div>
    );
  }
}

ProfessionsPage.propTypes = {
  professionsList: PropTypes.array.isRequired,
  bindActions: PropTypes.object.isRequired,
  loading : PropTypes.bool.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    bindActions: bindActionCreators(professionActions, dispatch)
  };
}

// What state should i expose as props.
// Only these components change? I think...
function mapStateToProps(state) {
  return {
    professionsList: state.professionsList,
    loading : state.apiCallsInProgress > 0
  };
}

// Connect enables connecting your react component to the store.
export default connect(mapStateToProps, mapDispatchToProps)(ProfessionsPage);
