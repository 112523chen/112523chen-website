export const handleVisibilityChange = () => {
  setTimeout(() => {
    document.title =
      document.visibilityState === "hidden"
        ? "Your next software engineer"
        : "Alex Chen";
  }, 2000);
};
