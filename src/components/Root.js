import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import App from "./App";

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/:filter?" component={App} />
        </div>
      </Router>
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
