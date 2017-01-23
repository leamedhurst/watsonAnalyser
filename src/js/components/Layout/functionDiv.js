import React from "react";



export default class FunctionDiv extends React.Component {
    handleChange(e) {
        const title = e.target.value;
        this.props.changeTitle(title);
    }

    changeStage(e) {
      const stage = this.props.stage + 1;
      this.props.changeStage(stage);
    }

    renderWhenTrue(instCurr) {
      return (
        <div>{instCurr['OptionalInst']} :-
        <a href="#" class="button">{instCurr['optionalButton']}</a></div>
      )
    }

    renderWhenFalse() {
      return (
        <span></span>
      )
    }




    render() {
      var obj = this.props.instructions;
      var stageNumber = this.props.stage;
      var stepInstructions = obj['stepInstructions'];
      var instCurr = stepInstructions[stageNumber];

        return (
          <div>
            <h3>Step {stageNumber} :-  {instCurr['Title']}</h3>
            {instCurr['Instructions']} <br />
            <a href="#" class="button" onClick={this.changeStage.bind(this)}>{instCurr['ButtonLabel']}</a>
            <br/>
              {instCurr['OptionalInst'] ? this.renderWhenTrue(instCurr):this.renderWhenFalse()}
          </div>
        );
    }
}
