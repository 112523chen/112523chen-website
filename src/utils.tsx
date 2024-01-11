export const handleVisibilityChange = () => {
  document.title =
    document.visibilityState === "hidden"
      ? "Your next software engineer"
      : "Alex Chen";
};
