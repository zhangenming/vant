import { withInstall } from '../utils';
import _Skeleton from './Skeleton';

export const Skeleton = withInstall(_Skeleton);
export default Skeleton;
export { skeletonProps } from './Skeleton';
export type { SkeletonProps, SkeletonAvatarShape } from './Skeleton';

declare module 'vue' {
  export interface GlobalComponents {
    VanSkeleton: typeof Skeleton;
  }
}
