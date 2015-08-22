import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">React course</a>
          </div>
      
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Twitter stream</a></li>
              <li><a href="#">About</a></li>
            </ul>
            <form className="navbar-form navbar-left" role="search">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="keywords or a hashtag" />
              </div>
              <button type="submit" className="btn btn-primary">Search!</button>
            </form>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="https://twitter.com/AbieeAlejandro">by @AbieeAlejandro</a>
              </li>
            </ul>
          </div>
        </div>
      </nav> 
    );
  }
}

export default Header;
