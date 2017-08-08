import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { post } from './action';

import s from './menu';

class Menu extends Component {
  shouldComponentUpdate(nextProps) {
    return true;
  }
  render() {
    return (
      <div className={s.box}>
        <div className={s.btn} />
        <div className={s.nav}>
          <Link to="/">首页</Link>
          <Link to="">壁画展示</Link>
          <Link to="">我们的展览</Link>
          <Link to="">关于我们</Link>
          <Link to="">版权声明</Link>
        </div>
      </div>
    );
  }
}
Menu.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(Menu);

