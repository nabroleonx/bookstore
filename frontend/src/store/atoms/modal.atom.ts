import { atom } from 'recoil';
import { ModalAtomProps } from '@/components/atoms/modal/types';

export const modalState = atom<ModalAtomProps>({
  key: 'modalState',
  default: { open: false },
});
