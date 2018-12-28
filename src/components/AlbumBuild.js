import React,{Component} from 'react';
import {getPricingInformation} from '../api/albumApi';

export class AlbumBuild extends Component{

    render(){
        return(<div>
            Album Build Page
            <button onClick={getPricingInformation}>Get Price Info</button>
        </div>);
    }
}