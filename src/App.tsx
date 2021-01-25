import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import icon from '../assets/icon.svg';

const Hello = () => {
  return (
    <div>
      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>
        <Link to="/sample">sample</Link>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              🙏
            </span>
            Donate
          </button>
        </a>
      </div>
    </div>
  );
};

const Sample = () => {
  return <p>hello world</p>;
};

export default function App() {
  return (
    <Router basename="/">
      <Switch>
        <Route path="/" exact component={Hello} />
        <Route path="/sample" component={Sample} />
      </Switch>
    </Router>
  );
}
