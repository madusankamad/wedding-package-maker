import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AlbumComponent extends Component {
    constructor() {
        super();
        this.state = {}
    }

    componentWillReceiveProps(nextProps) {
        console.log('Component is receiving proips => ', nextProps);
    }

    albumIdChangeHandler = (evt)=>{
        console.log(evt.currentTarget.value);
    };

    render() {
        const {albumSizes, pricingInfo} = this.props.albumInfo;
        console.log('*********** ********', pricingInfo);
        return (<div>{albumSizes &&
        <select onChange={this.albumIdChangeHandler}>{albumSizes.map((sizeId, index) => <option value={pricingInfo[sizeId].sizeId}
                                                           key={index}>{sizeId}</option>)}</select>}</div>);
    }
}

export default AlbumComponent

AlbumComponent.propTypes = {
    albumInfo: PropTypes.object.isRequired
};
