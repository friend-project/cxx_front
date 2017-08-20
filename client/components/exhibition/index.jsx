import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';

import Head from './../head';
import { post } from './action';
import s from './exhibition';

class Banner extends Component {
  shouldComponentUpdate(nextProps) {
    return true;
  }
  _toDetail() {
    this.props.history.push('/exhibition/1');
  }

  render() {
    return (
      <div className={s.box}>
        <Head />
        <div
          className={classnames(s.entry, s.exhibition)}
          onClick={() => this._toDetail()}
        >
          <em>山西展览</em>
          <span>coming soon...</span>
        </div>
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

