import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './App.css';

import * as actions from './actions';
import NumBtn from './components/NumBtn';
import OperatorBtn from './components/OperatorBtn';
import Result from './components/Result';

class App extends Component {
  render() {
    const {calculator, actions} = this.props;
    console.log(calculator);
    console.log(actions);

    return (
      <React.Fragment>
        <div className="result">
          <Result
            result={
              calculator.showingResult
                ? calculator.resultValue
                : calculator.inputValue
            }
          />
        </div>
        <div className="wrapper">
          <div className="number">
            <div className="numUpper">
              <NumBtn n={7} onClick={() => actions.onNumClick(7)} />
              <NumBtn n={8} onClick={() => actions.onNumClick(8)} />
              <NumBtn n={9} onClick={() => actions.onNumClick(9)} />
            </div>
            <div className="numMiddle">
              <NumBtn n={4} onClick={() => actions.onNumClick(4)} />
              <NumBtn n={5} onClick={() => actions.onNumClick(5)} />
              <NumBtn n={6} onClick={() => actions.onNumClick(6)} />
            </div>
            <div className="numLower">
              <NumBtn n={1} onClick={() => actions.onNumClick(1)} />
              <NumBtn n={2} onClick={() => actions.onNumClick(2)} />
              <NumBtn n={3} onClick={() => actions.onNumClick(3)} />
            </div>
            <div className="zero">
              <NumBtn n={0} />
              <span className="allClear">
                <OperatorBtn o={'AC'} onClick={() => actions.onClearClick()} />
              </span>
              <span className="equal">
                <OperatorBtn o={'='} onClick={() => actions.onEqualClick()} />
              </span>
            </div>
          </div>
          <div className="operator">
            <OperatorBtn o={'÷'} onClick={() => actions.onDivideClick()} />
            <OperatorBtn o={'×'} onClick={() => actions.onMultiplyClick()} />
            <OperatorBtn o={'-'} onClick={() => actions.onMinusClick()} />
            <OperatorBtn o={'+'} onClick={() => actions.onPlusClick()} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  calculator: state.calculator,
});

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);


// 3つのComponentをimport
// mapStateToPropsとmapDispatchToPropsを追加し、connectで結合させる

// mapStateToProps
// Storeが持つ状態(state)をどのようにpropsに混ぜ込むかを決める

// mapDispatchToProps
// Reducer にアクションを通知する関数dispatchをどのようにpropsに混ぜ込むかを決める

// bindActionCreators()
// Action を追加するたびにconnectに追加するのは大変なのでbindActionCreators を使って自動的にマッピングする