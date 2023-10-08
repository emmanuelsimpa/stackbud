import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '@/lib/redux/Store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
