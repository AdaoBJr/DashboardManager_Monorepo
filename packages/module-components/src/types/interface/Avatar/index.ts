import { AvatarProps, SxProps, Theme } from '@mui/material';

export interface AvatarModuleProps extends AvatarProps {}

export interface UseAvatarModuleProps extends AvatarModuleProps {
  sx?: SxProps<Theme>;
}
