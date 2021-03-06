import React, { Component } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

export default class CommentApp extends Component {
    constructor(){
        super();
        this.state = {
            comments: []
        };
    }
    
    handleSubmitComment  = (comment) =>  {
        if (!comment) return
        if (!comment.username) return alert('请输入用户名')
        if (!comment.content) return alert('请输入评论内容')
        let { comments } = this.state
        comments.push(comment)
        this.setState({comments})
    }

    render (){
        return (
            <div className='wrapper'>
                <CommentInput
                    onSubmit={this.handleSubmitComment}
                />
                <CommentList comments={this.state.comments}/>
            </div>
        );
    }
}