import React from 'react';
import MessageBox from './MessageBox.jsx';

var App = (props) => {
  const { children } = props;

  return (
    <div className="container">
      <div className="header">
        <ul className="nav nav-pills pull-right">
          <li className="active"><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <h3 className="text-muted">ECMAScript6 React</h3>
      </div>

      <div className="jumbotron">
        <h1>Jumbotron heading</h1>
        <p className="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
        <p><a className="btn btn-lg btn-success" href="#">Sign up today</a></p>
      </div>

      <div className="row marketing">
        <div className="col-lg-6">
          <MessageBox
            title="Bootstrap"
            message="Sleek, intuitive, and powerful mobile first front-end framework for faster and easier web development." />
        </div>

        <div className="col-lg-6">
          <MessageBox
            title="React"
            message="React is a declarative, efficient, and flexible JavaScript library for building user interfaces." />
        </div>
      </div>
      
      <div className="footer">
        <p><span className="glyphicon glyphicon-heart"></span> from Abiee</p>
      </div>
    </div>
  );
};

export default App;
