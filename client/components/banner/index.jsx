import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Slider from './components/slider.jsx';

import { post } from './action';

import s from './banner';

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      car: null,
    };
  }
  render() {
    var slides = [
      {
        background: "http://admin.guwenming.org/map/240b02eaa7c61.b",
        link: "#"
      }, {
        background: "http://admin.guwenming.org/map/5001554c404ed.png",
        link: "#"
      }
    ];
    return (
      <div className={s.box}>
        <Slider slides={slides} time="2000" />
      </div>
    );
  }
}
Banner.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(Banner);

