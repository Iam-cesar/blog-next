const capitalize = (word: string | undefined): string => {
  if (!word) return "";
  return word?.replace(/\w{1}/, (match: string) => match.toUpperCase());
};

export default capitalize;
