import { AvatarProps, SxProps, Theme } from '@mui/material';

interface SxElements {
  button?: SxProps<Theme>;
  editIconWrapper: SxProps<Theme>;
  iconEdit: SxProps<Theme>;
  avatar?: SxProps<Theme>;
  iconAvatar: SxProps<Theme>;
}

export interface AvatarModuleProps extends AvatarProps {
  styles?: SxElements | undefined;
}

export interface UseAvatarModuleProps extends AvatarModuleProps {}
