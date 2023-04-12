import React from "react";
import { useNavigate } from 'umi';

export default function User() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => {
        navigate('/', {
          state: {
            c: 987
          }
        })
      }}>go to index has State!</button>
    </div>
  );
}