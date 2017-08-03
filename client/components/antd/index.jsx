import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DatePicker, message, Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

import s from './style';

class Async extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    }
  }
  _date(date) {
    message.info('您选择的日期是:' + date.toString());
    this.setState({date});
  }
  render() {
    return (
      <div className={s.antd}>
        <Layout>
          <Header>Header</Header>
          <Layout>
            <Sider>Sider</Sider>
            <Content>Content</Content>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
        <DatePicker onChange={(v) => this._date(v)} />
        <div>{this.state.date.toString()}</div>
      </div>
    );
  }
}
Async.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return { };
};

export default connect(mapStateToProps)(Async);

