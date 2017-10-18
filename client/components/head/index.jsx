import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Menu from './../menu';
import Filter from './../filter';

import s from './head';

class Head extends Component {
  shouldComponentUpdate(nextProps) {
    return true;
  }
  render() {
    return (
      <div className={s.head}>
        <Menu />
        <div className={s.logo} >
          <Link to="/">
            <img src="http://admin.guwenming.org/map/9c2e9e36b6dd4.svg" />
          </Link>
        </div>
        <Filter />
      </div>
    );
  }
}
Head.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(Head);

