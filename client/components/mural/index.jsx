import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import cfg from '../../../config/domain';

import Head from './../head';
import { getMural } from './action';
import s from './mural';

class Banner extends Component {
  shouldComponentUpdate(nextProps) {
    return true;
  }
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getMural());
  }
  render() {
    const { mural, match } = this.props;
    return (
      <div className={s.box}>
        <Head />
        <div className={s.mural}>
          <ul>
            {
              mural.response.map((v, k) => {
                return (
                  <li key={v.id}>
                    <a
                      // href={`${match.url}/${v.id}`}
                      href={`${cfg.img}${v.img}`}
                      target="_blank"
                    >
                      <img
                        src={`${cfg.img}${v.thumb_img}`}
                      />
                    </a>
                  <h2>{v.name}</h2>
                </li>
                )
              })
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
  const { mural } = state;
  return {
    mural,
  };
};

export default connect(mapStateToProps)(Banner);

