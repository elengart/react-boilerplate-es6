import React from 'react';
import ReactDOM from 'react-dom';
import Hello from 'Hello';

// test es6 syntax
var foo = {a: 'a', b: 'b'}
var foo1 = {c: 'c', ...foo };
console.log(foo1);

ReactDOM.render(
      <Hello />, document.getElementById("app")
);

console.log('hi');
