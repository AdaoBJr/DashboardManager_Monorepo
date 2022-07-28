import React, { useMemo } from 'react';
import Lottie from 'react-lottie';
import { AnimationModuleProps } from '../../../types/interface';

export const AnimationModule: React.FC<AnimationModuleProps> = props => {
  const settings = useMemo(
    () => ({
      loop: true,
      autoplay: true,
      animationData: props.animation.default,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }),
    [props.animation]
  );

  return (
    <Lottie
      options={settings}
      width={props?.width || props?.height || 460}
      height={props?.height || props?.width || 460}
    />
  );
};
