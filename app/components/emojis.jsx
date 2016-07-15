import React from 'react';

import EmojiItem from './emoji-item.jsx';

export default React.createClass({
  displayName: 'Emojis',

  propTypes: {
    items: React.PropTypes.object.isRequired,
  },

  getTitle: function (handle) {
    const title = handle.replace(/_/g, ' ');
    return title.charAt(0).toUpperCase() + title.slice(1);
  },

  getUrl: function (handle) {
    return this.props.items[handle];
  },

  getUnicodeCode: function (handle) {
    const url = this.getUrl(handle);
    const code = url.slice(url.lastIndexOf('/') + 1)

    return code.slice(0, code.indexOf('.')).toUpperCase();
  },

  getUnicodeCharacter: function (unicodeCodePoint) {
    const number = Number('0x' + unicodeCodePoint);
    let unicodeCharacter;

    try {
      unicodeCharacter = String.fromCodePoint(number);
    } catch (e) {
      unicodeCharacter = '';
    }

    return unicodeCharacter;
  },

  render: function () {
    return (
      <table className="mdl-data-table mdl-js-data-table" style={{margin: '0 auto'}}>
        <thead>
          <tr>
            <th className="mdl-data-table__cell--non-numeric">Image</th>
            <th className="mdl-data-table__cell--non-numeric">Shortname</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(this.props.items).map(function (handle) {
            return <EmojiItem
              key={handle}
              name={handle}
              imageSrc={this.getUrl(handle)}
              imageAlt={this.getUnicodeCharacter(this.getUnicodeCode(handle))}
              imageTitle={this.getTitle(handle)}
            />
          }, this)}
        </tbody>
      </table>
    );
  }
});
