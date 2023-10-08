import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/lib/redux/Store';

export const useAppDispatch: () => AppDispatch =
  useDispatch as () => AppDispatch;
