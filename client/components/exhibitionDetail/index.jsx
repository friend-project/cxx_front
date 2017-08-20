import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';

import Head from './../head';
import { post } from './action';
import s from './exhibitionDetail';

class Banner extends Component {
  shouldComponentUpdate(nextProps) {
    return true;
  }
  render() {
    return (
      <div className={s.box}>
        <Head />
        <div className={s.content}>
          <img
            src="http://d13n9ry8xcpemi.cloudfront.net/photo/odai/400/3c3de97422a325dcd3b327d0b1216145_400.jpg"
          />
          <img
            src="http://d13n9ry8xcpemi.cloudfront.net/photo/odai/400/3c3de97422a325dcd3b327d0b1216145_400.jpg"
          />
          <p>1973年，居住在布朗克斯西区街道的牙买加移民Kool Herc经常在家中举办“音乐派对”，他经常播放一些爵士乐、R&B、放克。Ska和灵魂乐，与同时期美国流行的迪斯科相比，Herc的音乐更贴近贫民区人们的真实生活，他的派对也越办越大。最后，Herc决定把派对搬到户外，并独创了使用两台唱机，重复播放相同唱片中精彩的break的手法，使派对气氛始终维持在高潮。从此，DJ Kool Herc的派对在布朗克斯区名声大噪。
          </p>
          <img
            src="http://d13n9ry8xcpemi.cloudfront.net/photo/odai/400/3c3de97422a325dcd3b327d0b1216145_400.jpg"
          />
          <p>1973年，居住在布朗克斯西区街道的牙买加移民Kool Herc经常在家中举办“音乐派对”，他经常播放一些爵士乐、R&B、放克。Ska和灵魂乐，与同时期美国流行的迪斯科相比，Herc的音乐更贴近贫民区人们的真实生活，他的派对也越办越大。最后，Herc决定把派对搬到户外，并独创了使用两台唱机，重复播放相同唱片中精彩的break的手法，使派对气氛始终维持在高潮。从此，DJ Kool Herc的派对在布朗克斯区名声大噪。
          </p>
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

