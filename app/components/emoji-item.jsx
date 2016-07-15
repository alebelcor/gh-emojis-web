import React from 'react';

export default React.createClass({
  displayName: 'EmojiItem',

  propTypes: {
    imageAlt: React.PropTypes.string.isRequired,
    imageSrc: React.PropTypes.string.isRequired,
    imageTitle: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired
  },

  render: function () {
    return (
      <tr>
        <td className="mdl-data-table__cell--non-numeric">
          <img
              className=""
              src={this.props.imageSrc}
              draggable="false"
              alt={this.props.imageAlt}
              title={this.props.imageTitle}
              aria-label={`Emoji: ${this.props.imageTitle}`} />
        </td>
        <td className="mdl-data-table__cell--non-numeric">:{this.props.name}:</td>
      </tr>
    );
  }
});
