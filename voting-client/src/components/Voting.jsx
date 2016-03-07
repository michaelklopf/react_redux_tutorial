/*jshint esversion: 6 */
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Winner from './Winner';
import Vote from './Vote';

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    console.log(...this.props);
    return <div>
      {
        this.props.winner ?
          <Winner ref="winner" winner={this.props.winner} /> :
          <Vote {...this.props} />
      }
    </div>;
  }
});
