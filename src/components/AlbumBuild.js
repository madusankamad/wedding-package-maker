import React, {Component} from 'react';
import {getPricingInformation} from '../api/albumApi';
import {SummaryBox} from './SummaryBox'
import AlbumComponent from "./AlbumComponent";

export class AlbumBuild extends Component {
    constructor() {
        super();
        this.state = {
            allAlbumInformation: {}
    }
    }

    componentWillMount() {
        getPricingInformation().then(response => this.setState({allAlbumInformation: response.data}));
    }


    render() {
        return (<div className="row">
            <div className="col-md-8">Left: Album Build Page
                <AlbumComponent albumInfo={this.state.allAlbumInformation}/>
            </div>
            <div className="col-md-4"><SummaryBox/>
            </div>
        </div>);
    }
}