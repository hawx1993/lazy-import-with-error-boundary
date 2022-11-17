import React, { useCallback } from 'react';
// import './index.less';

const CustomError = ({ onReload }) => {
  const handleClick = useCallback(async () => {
    await onReload();
  }, [onReload]);
  return (
    <div className="custom-error-wrap">
      <h4 className="title">页面崩溃了，无法正确显示，（自定义文案）</h4>
      <button onClick={handleClick} className="refresh-btn">
        刷新
      </button>
    </div>
  );
};
export { CustomError };
