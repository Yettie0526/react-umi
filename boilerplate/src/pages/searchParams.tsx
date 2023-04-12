// 在URL中携带需要传递的参数
import React from "react";
import { useNavigate, createSearchParams } from 'umi';

export default function User() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => {
        navigate(`/?${createSearchParams({ a: '1', b: '2' })}`)
      }}>go to index has SearchParams!</button>
    </div>
  );
}