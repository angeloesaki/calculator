// 発行されたActionにより、どのように状態を遷移させるのかを記述するのがReducer

// 電卓を作るのに必要な以下の5つの状態を遷移させる
// inputValue(入力された値)
// operator(演算子)
// resultValue(計算結果)
// calculate(計算を行うかの判断)
// showingResult(結果を表示するかの判断)

// case actionTypes.EQUAL:では直前に押された演算子をoperatorに保存しておくことで、どのような演算を行うのかを判断している

// calculateは演算子ボタンを押した時に演算を行うかどうか判断するためのもの
// これがないと最初の状態から『8-5』を計算したいときに、『8-』を押した際に『0-8』が計算され、その後『-8-5』が計算されるので、結果が『-13』となってしまう

import * as actionTypes from '../utils/actionTypes';

const initialAppState = {
  inputValue: 0,
  operator: '',
  resultValue: 0,
  calculate: false,
  showingResult: false,
};

const calculator = (state = initialAppState, action) => {
  switch (action.type) {
    case actionTypes.INPUT_NUMBER:
      return {
        ...state,
        inputValue: state.inputValue * 10 + action.number,
        showingResult: false,
      };

    case actionTypes.PLUS:
      if (state.calculate === true) {
        return {
          ...state,
          inputValue: 0,
          operator: '+',
          resultValue: state.resultValue + state.inputValue,
          showingResult: true,
        };
      } else {
        return {
          ...state,
          inputValue: 0,
          operator: '+',
          calculate: true,
          resultValue: state.inputValue,
          showingResult: true,
        };
      }

    case actionTypes.MINUS:
      if (state.calculate === true) {
        return {
          ...state,
          inputValue: 0,
          operator: '-',
          resultValue: state.resultValue - state.inputValue,
          showingResult: true,
        };
      } else {
        return {
          ...state,
          inputValue: 0,
          operator: '-',
          calculate: true,
          resultValue: state.inputValue,
          showingResult: true,
        };
      }

    case actionTypes.MULTIPLY:
      if (state.calculate === true) {
        return {
          ...state,
          inputValue: 0,
          operator: '*',
          resultValue: state.resultValue * state.inputValue,
          showingResult: true,
        };
      } else {
        return {
          ...state,
          inputValue: 0,
          operator: '*',
          calculate: true,
          resultValue: state.inputValue,
          showingResult: true,
        };
      }

    case actionTypes.DIVIDE:
      if (state.calculate === true) {
        return {
          ...state,
          inputValue: 0,
          operator: '/',
          resultValue: state.resultValue / state.inputValue,
          showingResult: true,
        };
      } else {
        return {
          ...state,
          inputValue: 0,
          operator: '/',
          calculate: true,
          resultValue: state.inputValue,
          showingResult: true,
        };
      }

    case actionTypes.CLEAR:
      return {
        inputValue: 0,
        operator: '',
        calculate: false,
        resultValue: 0,
        showingResult: false,
      };
    case actionTypes.EQUAL:
      switch (state.operator) {
        case '+':
          return {
            inputValue: state.resultValue + state.inputValue,
            operator: '',
            calculate: false,
            resultValue: state.resultValue + state.inputValue,
            showingResult: true,
          };
        case '-':
          return {
            inputValue: state.resultValue - state.inputValue,
            operator: '',
            calculate: false,
            resultValue: state.resultValue - state.inputValue,
            showingResult: true,
          };
        case '*':
          return {
            inputValue: state.resultValue * state.inputValue,
            operator: '',
            calculate: false,
            resultValue: state.resultValue * state.inputValue,
            showingResult: true,
          };
        case '/':
          return {
            inputValue: state.resultValue / state.inputValue,
            operator: '',
            calculate: false,
            resultValue: state.resultValue / state.inputValue,
            showingResult: true,
          };
        default:
          return state;
      }

    default:
      return state;
  }
};

export default calculator;