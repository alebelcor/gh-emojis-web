import 'whatwg-fetch';
import 'material-design-lite/dist/material.min.css';
import 'material-design-lite/material.min.js';

import React from 'react';

import Emojis from './emojis.jsx';

const GITHUB_API_EMOJIS_ENDPOINT = 'https://api.github.com/emojis';

export default React.createClass({
  displayName: 'App',

  getInitialState: function () {
    return {
      emojis: {}
    };
  },

  componentWillMount: function () {
    fetch(GITHUB_API_EMOJIS_ENDPOINT)
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          emojis: json
        });
      });
  },

  render: function () {
    return (
      <div className="mdl-layout mdl-js-layout">
        <header className="mdl-layout__header">
          <div className="mdl-layout-icon"></div>
          <div className="mdl-layout__header-row">
            <span className="mdl-layout__title">GitHub emojis</span>
            <div className="mdl-layout-spacer"></div>
            <span>All the emojis available to use on GitHub</span>
          </div>
        </header>
        <main className="mdl-layout__content">
          <Emojis items={this.state.emojis} />
        </main>
      </div>
    );
  }
});
