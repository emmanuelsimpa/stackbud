import { toast } from 'react-toastify';

export default function handleErrorMessage(error: any, options?: any) {
  const message = getErrorMessage(error);
  if (typeof message === 'string') {
    toast(message, { type: 'error', ...options });
  } else if (typeof message === 'object') {
    message?.forEach((text: string) => {
      toast(text, { type: 'error', autoClose: false, ...options });
    });
  }
}

export function getErrorMessage(error: any) {
  return error?.response?.data
    ? error?.response?.data?.message
    : error?.message === 'Network Error'
    ? 'Please check your network'
    : error?.message;
}
