import React from 'react';
import { RecoilRoot } from 'recoil';
import { RecoilRootWrapperProps } from './types';

const RecoilRootWrapper: React.FC<RecoilRootWrapperProps> = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};
export default RecoilRootWrapper;
