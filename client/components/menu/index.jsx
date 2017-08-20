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
    return (
      <div className={s.box}>
        <div
          className={s.btn}
          onClick={() => this._toggleMenu()}
        />
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

