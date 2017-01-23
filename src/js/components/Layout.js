import React from "react";

import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {
   constructor(){
     super();
     this.state = {title:"Welcome", stage:1};
   }

   changeTitle(title){
     this.setState({title});
   }

  render(){
    return(
      <div>
      <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
        <div >
          <h3>Step 1 :- File Upload:</h3>
          Push the button below to upload your data to be anlyzed: <br />
          <form action="/readFile"  method="POST">
              <input type="submit" value="read file"></input>
          </form>
          <br/>
           Coming Soon :-
           <a href="doc/alchemylanguage" class="button">Read Data From EV</a>
        </div>

      </div>
    );
  }
}
