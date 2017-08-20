import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Head from './../head';
import { post } from './action';
import s from './mural';

class Banner extends Component {
  shouldComponentUpdate(nextProps) {
    return true;
  }
  _toDetail() {
    this.props.history.push('/mural/1');
  }
  render() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
      <div className={s.box}>
        <Head />
        <div className={s.mural}>
          <ul>
            {
              arr.map(() =>
                <li
                  onClick={() => this._toDetail()}
                >
                  <img
                    src="http://d13n9ry8xcpemi.cloudfront.net/photo/odai/400/3c3de97422a325dcd3b327d0b1216145_400.jpg"
                  />
                  <h2>壁画名称地方大幅</h2>
                </li>
              )
            }
          </ul>
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

