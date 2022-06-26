import React from 'react';
import { CardMedia, SxProps, Theme } from '@mui/material';

import { ReactFC } from 'types/interface';

interface ImageProps extends ReactFC {
  src: string;
  width?: string | number;
  height?: string | number;
  maxWidth?: string | number;
  maxHeight?: string | number;
  alt?: string;
  sx?: SxProps<Theme>;
}

export const Image: React.FC<ImageProps> = props => {
  return (
    <CardMedia
      component="img"
      image={props.src}
      sx={{
        width: props.width,
        height: props.height,
        maxWidth: props.maxWidth,
        maxHeight: props.maxHeight,
        ...props.sx
      }}
      alt={props.alt || 'imagem'}
    />
  );
};
