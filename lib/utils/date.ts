export function convertToFourDigitYear(year: string) {
  // Define a threshold year (adjust as needed)
  const thresholdYear = 50;

  // Convert the year to a number
  const numericYear = parseInt(year, 10);

  // Determine the century based on the threshold
  const century = numericYear < thresholdYear ? 2000 : 1900;

  // Combine the century and the numeric year
  const fourDigitYear = century + numericYear;

  return fourDigitYear;
}
