export const isValidDate = (dateString: string) => {
  const parsedDate = new Date(dateString);

  return !isNaN(parsedDate.getTime());
};
