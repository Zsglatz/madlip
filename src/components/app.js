import React, { Component } from 'react';
import Greeting from './madlib_form';
import madlib_form from './madlib_form';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="backgroundSkew">
          <div className="madlib-heading"> 
            <h1>Bootega Madlibs</h1>
            <div className="madlib-subheading">
            Fill out the fields below and click the generate button <br/> to see the madlib story
            </div>
         </div>
         <Greeting name="Zayne"/>
      </div>
    </div>
    );
  }
}
