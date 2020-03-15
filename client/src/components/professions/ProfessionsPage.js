import React from 'react';
import { connect } from 'react-redux';
import { Card } from '@material-ui/core';
import * as actions from '../../actions/actions';

  
//Most of the time : Class components are used for container components and functional components for presentational
class ProfessionsPage extends React.Component {

    constructor(props) {
        super(props);
    }

    // API calls should be made in component Did Mount
    componentDidMount(){
        this.props.dispatch(actions.fetchProfession());
    }

    render(){
        const listItems = this.props.professionsList.map((profession) =>
            <Card key = {profession._id}> {profession.name} </Card>
        );
        return (
            <div>
                 {listItems}
            </div>
        )
    }
}

// What state should i expose as props. 
// Only these components change? I think...
function mapStateToProps(state) {
    return {
        professionsList : state.profession.professionsList
    }
}

// Connect enables connecting your react component to the store.
export default connect(mapStateToProps) (ProfessionsPage);