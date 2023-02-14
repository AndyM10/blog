export const formatDate = (date: string) => {
  return new Date(date).toLocaleString("en-UK", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
