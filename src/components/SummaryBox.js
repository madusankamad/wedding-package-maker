import React,{Component} from 'react';
import PropTypes from 'prop-types';

class SummaryBoxComponent extends Component{
    constructor(){
        super();
        this.state = {}
    }

    render(){
        return(<div>Summ aryBox</div>)
    }
}

SummaryBoxComponent.propTypes = {
    summary: PropTypes.object
};

export const SummaryBox = SummaryBoxComponent;