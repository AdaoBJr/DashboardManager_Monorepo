import { useMemo } from 'react';

import { UseAnimationModuleProps } from '../../types/interface';

export const useAnimation = (props: UseAnimationModuleProps) => {
  const options = useMemo(
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

  const animationProps = useMemo(
    () => ({
      options,
      width: props?.width || props?.height || 460,
      height: props?.height || props?.width || 460,
      style: { ...props?.style }
    }),
    [options, props?.width, props?.height, props?.style]
  );

  return { animationProps };
};
