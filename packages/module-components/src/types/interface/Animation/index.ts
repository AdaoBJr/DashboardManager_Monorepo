import { CSSProperties } from 'react';

export interface AnimationModuleProps {
  animation: any;
  width?: number | string;
  height?: number | string;
  style?: CSSProperties;
}

export interface UseAnimationModuleProps extends AnimationModuleProps {}
