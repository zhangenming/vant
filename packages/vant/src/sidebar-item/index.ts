import { withInstall } from '../utils';
import _SidebarItem from './SidebarItem';

export const SidebarItem = withInstall(_SidebarItem);
export default SidebarItem;
export { sidebarItemProps } from './SidebarItem';
export type { SidebarItemProps } from './SidebarItem';

declare module 'vue' {
  export interface GlobalComponents {
    VanSidebarItem: typeof SidebarItem;
  }
}
