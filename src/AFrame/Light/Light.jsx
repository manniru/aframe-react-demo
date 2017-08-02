import 'aframe';
import 'babel-polyfill';
import {Entity} from 'aframe-react';
import React from 'react';

import obj_StreetLamp_dae from "../../../assets/obj/Lamp/StreetLamp.dae";

export class Light extends React.Component {
  render() {
    return (
      <Entity {...this.props} className="lighting">
        <Entity collada-model="#obj_StreetLamp_dae" position="12.5 0 -12.5"/>
        <Entity collada-model="#obj_StreetLamp_dae" position="-12.5 0 -12.5"/>
      </Entity>
    );
  }
}

export const renderAssets = () => {
  return <Entity key="Light">
    <a-asset-item id="obj_StreetLamp_dae" src={obj_StreetLamp_dae}/>
  </Entity>
}