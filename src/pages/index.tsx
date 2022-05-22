import { ReactChild, ReactFragment, ReactPortal } from 'react';
import { history } from 'umi';
export default function IndexPage(props: { children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) {
  return (
    <div>
      <h1>test</h1>
      <button onClick={()=>history.push("hello")}>跳转</button>
      <button onClick={()=>history.goBack()}>返回</button>
      <div style={{ padding: 20 }}>{ props.children }</div>;
    </div>
  );
}
