export const sleep = (seconds: number = 0.5): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
};
