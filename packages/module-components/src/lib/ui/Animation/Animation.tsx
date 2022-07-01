import React, { useMemo } from 'react';
import Lottie from 'react-lottie';

interface AnimationModuleProps {
  animation: any;
}

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

  return <Lottie options={settings} />;
};
