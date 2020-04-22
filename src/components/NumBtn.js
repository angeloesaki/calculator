import React from 'react';

const NumBtn = ({n, onClick}) => <button onClick={onClick}>{n}</button>;

export default NumBtn;

// 0~9の数字ボタン