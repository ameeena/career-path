import React from 'react';
import { connect } from 'react-redux';
import { Card } from '@material-ui/core';
import * as actions from '../../actions/actions';

  
//Class components are used for container components and functional components for presentational
class ProfessionsPage extends React.Component {

    constructor(props) {
        super(props);
    }

    // API calls should be made in component Did Mount
    componentDidMount(){
        this.props.dispatch(actions.fetchProfession());
    }

    render(){
        // const classes = useStyles();

        const listItems = this.props.professionsList.map((profession) =>
            // <li key = {profession._id}>{profession.name}</li>
            <Card key = {profession._id}> {profession.name} </Card>
        );
        return (
            <div>
                 {/* <ul>{listItems}</ul>, */}
                 {listItems}
            </div>
        )
    }
}

export default connect((state) => {
 return {
    professionsList : state.profession.professionsList
 }
}) (ProfessionsPage);