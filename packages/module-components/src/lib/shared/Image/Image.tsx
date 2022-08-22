import React from 'react';
import { CardMedia } from '@mui/material';
import { ImageProps } from '../../../types/interface';

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
