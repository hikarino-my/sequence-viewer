import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import { css } from 'lightwindcss';
import range from './utils';

import('../pkg')
  .then((m) => m.align())
  .catch(() => {});

const seqGen = (len: number) => {
  const arr = ['A', 'T', 'G', 'C', '-', 'N'];
  return [...range(0, len)].map(
    () => arr[Math.floor(Math.random() * arr.length)]
  );
};
const sample = [...seqGen(100)];
const getColor = (v: string) => {
  const a = v.toUpperCase();
  switch (a) {
    case 'A':
      return 'red';
    case 'T':
      return 'blue';
    case 'C':
      return 'yellow';
    case 'G':
      return 'green';
    default:
      return 'white';
  }
};
const Hello = () => {
  return (
    <div>
      <h1>シーケンス表示部分</h1>
      <div
        className={css`
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          padding: 0;
        `}
      >
        {sample.map((v, i) => {
          const r = i;
          return (
            <div
              key={`${v}-${r}`}
              style={{
                color: 'black',
                width: 10,
                backgroundColor: getColor(v),
                margin: 0,
              }}
            >
              {v}
            </div>
          );
        })}
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
