import React, { Component } from 'react';
import './index.scss';
// import {markdown} from 'markdown';
import SimpleMDE from 'react-simplemde-editor';
import "simplemde/dist/simplemde.min.css";

class Edit extends Component {
	constructor(){
		super();
		this.state = {
			content:'这里是内容',
			markCon:''
		}
	}
	onChangeEvent(e){
		this.setState({
			content: e.target.value,
			// markCon: markdown.toHTML(e.target.value),
			mdeValue:''
		});
	}
	handleChange = value => {
		this.setState({ mdeValue: value });
		console.log(value);
	}
  render() {
    return (
      <div className="edit-wrap">
		  <p className="detail-tit">编辑</p>
		  <div className="edit-box">
			<div className="edit-con edit">
					<SimpleMDE onChange={this.handleChange}/>
					{/* <textarea value={this.state.content} onChange={(value)=>this.onChangeEvent(value)}>{this.state.content}</textarea> */}
			</div>
			{/* <div className="edit-pre edit" dangerouslySetInnerHTML={{__html:this.state.mdeValue}}></div> */}
		  </div>
      </div>
    );
  }
}

export default Edit;
