// @flow
import React from 'react';

const withContext = (WrappedComponent: React.Node, select: () => Object): any => (props: any) => {
  const contextSelector = select();
  return <WrappedComponent {...contextSelector} {...props} />;
};

export default withContext;