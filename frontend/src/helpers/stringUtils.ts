export function shortenFileName(fileName: string) {
  if (fileName?.length < 20) return fileName;

  const firstHalf = fileName.slice(0, 8);
  const secondHalf = fileName.slice(-10);
  const newString = `${firstHalf}...${secondHalf}`;
  return newString;
}