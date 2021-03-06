import React, { Component } from 'react';

export default class CommentInput extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            content: ''
        };
    }

    handleChange = (event, type) => {
        this.setState({
            [type]: event.target.value
        })
    }

    handleSubmit = () => {
        if(this.props.onSubmit){
            const { username, content } = this.state
            this.props.onSubmit({username, content})
        }
        this.setState({ content: '' });
    }

    render (){
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input 
                            value={ this.state.username } 
                            onChange={ e => this.handleChange(e, 'username') }
                        />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea 
                            value={ this.state.content }
                            onChange={ e => this.handleChange(e, 'content') }
                        />
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button
                        onClick={this.handleSubmit}
                    >
                        发布
                    </button>
                </div>
            </div>
        );
    }
}