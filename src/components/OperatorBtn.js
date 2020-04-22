import React from 'react';

const OperatorBtn = ({o, onClick}) => <button onClick={onClick}>{o}</button>;

export default OperatorBtn;

// +, -, ×, ÷の計算ボタン