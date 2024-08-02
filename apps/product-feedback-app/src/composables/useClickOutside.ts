import { Ref, watch, onUnmounted } from 'vue';

export function useClickOutside(isActive: Ref<boolean>) {
  const handleClickOutside = () => {
    isActive.value = false;
  };

  watch(isActive, (newValue) => {
    if (newValue === true) {
      document.addEventListener('click', handleClickOutside, { once: true });
    }
  });

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
  });
}
