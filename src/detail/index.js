import React, { Component } from 'react';
import './index.scss';
var MarkdownIt = require('markdown-it'),
    md = new MarkdownIt();
var result = md.render('# markdown-it rulezz!');

class Detail extends Component {
  render() {
    return (
      <div>
		  <p className="detail-tit" dangerouslySetInnerHTML={{__html:result}}></p>
      </div>
    );
  }
}

export default Detail;
