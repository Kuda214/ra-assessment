import React from 'react';

type Props = {
  style: React.CSSProperties;
};


export const Box = (props: Props ) => {
  return <div style={props.style}></div>;
};
