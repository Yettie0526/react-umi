// 在 location 对象中获取 state
import React from "react";
import { useLocation } from 'umi';

export default () => {
  const location = useLocation();
  return  <div>
            <p>State ---- { location.key }</p>
          </div>
};
