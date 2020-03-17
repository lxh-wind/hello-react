import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import CommentApp from './CommentApp';  
class Header extends Component {
    constructor () {
      super()
      console.log('construct')
    }
  
    componentWillMount () {
      console.log('component will mount')
    }
  
    componentDidMount () {
      console.log('component did mount')
    }
  
    render () {
      console.log('render')
      return (
        <div>
          <h1 className='title'>React 小书</h1>
        </div>
      )
    }
  }

ReactDOM.render(<Header/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
