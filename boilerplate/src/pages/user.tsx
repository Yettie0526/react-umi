// 命令式路由跳转
import React from "react";
import { history, useNavigate } from 'umi';

export default function User() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>User Page</h1>
      {/* back 方法，会撤回一次浏览器历史 */}
      {/* back 方法完全依赖于项目的浏览历史，也就是说完全依赖于你的“前一个页面”。这意味着，当你在当前路由刷新页面时， back 有可能会失效。所以实际项目中，要根据具体的项目逻辑和场景来选择合适的方法。 */}
      {/* useNavigate 只能用在 React 存在的上下文中，简单的说就是他只能在组件的生命周期中使用，如果你在全局的文件，比如 app.ts 或者 global.ts 文件中就不能使用 useNavigate ，只能使用 history。 */}
      <button onClick={() => history.back()}>go back by history!</button>
      <button onClick={() => history.push('/')}>go to index by history!</button>
      <button onClick={() => navigate(-1)}>go back by navigate!</button>
      <button onClick={() => navigate('/')}>go to index by navigate!</button>
    </div>
  );
}