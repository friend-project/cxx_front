import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import s from './menu';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: 'none',
    }
  }
  shouldComponentUpdate(nextProps) {
    return true;
  }
  _toggleMenu() {
    const { menu } = this.state;
    if (menu === 'none') {
      this.setState({
        menu: 'block',
      });
    } else {
      this.setState({
        menu: 'none',
      });
    }
  }
  render() {
    const { menu } = this.state;
    let sTop = {};
    let sMid = {};
    let sBot = {};
    if (menu === 'none') {
      sTop = {
        'transformStyle': 'preserve-3d',
        transition: 'transform 250ms',
        transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateX(0px) translateY(0px) translateZ(0px)',
      }
      sMid = {
        transition: 'width 250ms',
        width: '25px',
      }
      sBot = {
        'transformStyle': 'preserve-3d',
        transition: 'transform 250ms',
        transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateX(0px) translateY(0px) translateZ(0px)',
      }
    } else {
      sTop = {
        'transformStyle': 'preserve-3d',
        transition: 'transform 250ms',
        transform: 'rotateX(0deg) rotateY(0deg) rotateZ(45deg) translateX(7.0px) translateY(7.0px) translateZ(0px)',
      }
      sMid = {
        transition: 'width 250ms',
        width: '0px',
      }
      sBot = {
        'transformStyle': 'preserve-3d',
        transition: 'transform 250ms',
        transform: 'rotateX(0deg) rotateY(0deg) rotateZ(-45deg) translateX(7.0px) translateY(-7.0px) translateZ(0px)',
      }
    }
    return (
      <div className={s.box}>
        <div
          className={s.btn}
          onClick={() => this._toggleMenu()}
        >
          <span
            className={s.top}
            style={sTop}
          />
          <span
            className={s.middle}
            style={sMid}
          />
          <span
            className={s.bottom}
            style={sBot}
          />
        </div>
        <div
          className={s.nav}
          style={{
            display: menu
          }}
        >
          <Link to="/">首页</Link>
          <Link to="/mural">壁画展示</Link>
          <Link to="/exhibition">我们的展览</Link>
          <Link to="/about">关于我们</Link>
          <Link to="/copy">版权声明</Link>
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

