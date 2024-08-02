import { Ref, computed } from 'vue';

export function useActiveMenuItem(
  menuItems: string[],
  currentSortByIndex: Ref<number>
) {
  const activeMenuItem = computed<string>(
    () => menuItems[currentSortByIndex.value]
  );
  return { activeMenuItem };
}
