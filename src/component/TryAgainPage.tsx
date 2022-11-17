import React, { useCallback } from 'react';
import { Button } from 'antd';
import PAGE_CRASH from '../assets/page-crash.svg';
import './index.less';

const TryAgainPage = ({ onReload }) => {
  const handleClick = useCallback(async () => {
    await onReload();
  }, [onReload]);
  return (
    <div className="error-wrap">
      <img src={PAGE_CRASH} alt="" />
      <h4 className="title">页面崩溃了，无法正确显示</h4>
      <Button onClick={handleClick} type="primary" className="mt-24">
        刷新
      </Button>
    </div>
  );
};
export { TryAgainPage };
