import { withInstall } from '../utils';
import _Toast from './Toast';

export const Toast = withInstall(_Toast);
export default Toast;
export { toastProps } from './Toast';
export {
  showToast,
  closeToast,
  showFailToast,
  showLoadingToast,
  showSuccessToast,
  allowMultipleToast,
  setToastDefaultOptions,
  resetToastDefaultOptions,
} from './function-call';

export type { ToastProps } from './Toast';
export type { ToastType, ToastOptions, ToastPosition } from './types';
