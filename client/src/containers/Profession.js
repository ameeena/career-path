import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import profession from '../reducers/profession';

//Class components are used for container components and functional components for presentational
class Profession extends React.Component {

    constructor(props) {
        super(props);
    }

    // API calls should be made in component Did Mount
    componentDidMount(){
        this.props.dispatch(actions.fetchProfession());
    }

    render(){
        const listItems = this.props.professionsList.map((profession) =>
            <li key = {profession._id}>{profession.name}</li>
        );
        return (
            <div>
                 <ul>{listItems}</ul>,
            </div>
        )
    }
}

export default connect((state) => {
 return {
    professionsList : state.profession.professionsList
 }
}) (Profession);