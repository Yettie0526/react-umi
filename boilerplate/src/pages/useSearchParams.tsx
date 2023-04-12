// 获取URL中的参数信息
import React from "react";
import { Link, useSearchParams, createSearchParams } from 'umi';

export default () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const a = searchParams.get('a');
  const b = searchParams.get('b');
  return <div>
    <p>SearchParams ---- a:{a};b:{b}</p>
    <button onClick={() => {
      setSearchParams(createSearchParams({ a: '123', b: '456' }));
    }}>Change SearchParams</button>
  </div>
};