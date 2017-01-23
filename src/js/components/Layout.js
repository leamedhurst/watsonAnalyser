import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import FunctionDiv from "./Layout/FunctionDiv"

export default class Layout extends React.Component {
   constructor(){
     super();
     const instructions = {
  "stepInstructions": {
    "1": {
      Title : "File Upload",
      ButtonLabel : "Read File",
      Instructions : "Push the button below to upload your data to be analysed",
      OptionalInst : "Coming Soon :- ",
      optionalButton : "Read Data Form EV"
    },
    "2": {
      Title : "Send it to Watson",
      ButtonLabel : "Send It !!",
      Instructions : "Push the button below to get Watson to have a look"
    },
   "3": {
      Title : "Do Something",
      ButtonLabel : "Export File",
      Instructions : "Push the button below to export the file"
    }
  },
  "string": "Hello World"
}

     this.state = {title:"Welcome", stage:1, instructions:instructions};
   }

   changeTitle(title){
     this.setState({title});
   }

   changeStage(stage){
     if (stage == 4){
       stage = 1;
     }
     this.setState({stage});
   }

  render(){
    return(
      <div>
      <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
        <FunctionDiv changeStage={this.changeStage.bind(this)} stage={this.state.stage} instructions={this.state.instructions}/>
      </div>
    );
  }
}
