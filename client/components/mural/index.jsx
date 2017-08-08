import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { post } from './action';

import Head from './../head';

import s from './banner';

class Banner extends Component {
  shouldComponentUpdate(nextProps) {
    return true;
  }
  render() {
    return (
      <div className={s.box}>
        <Head />
        banner
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

