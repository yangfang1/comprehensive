import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import '../lib/iconfonts/iconfont.scss';
import Home from '../HomePage/Component/Home';
import LoginContainer from '../Login/Container/LoginContainer';
function BasicExample() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/login/:role" component={LoginContainer} />
        {/* <Route path="/topics" component={Topics} /> */}
      </div>
    </Router>
  );
}
export default BasicExample;
