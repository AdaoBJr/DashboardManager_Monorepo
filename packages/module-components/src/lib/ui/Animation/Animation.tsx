import React from 'react';
import Lottie from 'react-lottie';

import { useAnimation } from '../../../services/talons';
import { AnimationModuleProps } from '../../../types/interface';

export const AnimationModule: React.FC<AnimationModuleProps> = props => {
  const { animationProps } = useAnimation(props);

  return <Lottie {...animationProps} />;
};
