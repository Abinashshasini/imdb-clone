// * Function to generate random number * //
export default function handleGenerateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// * Function to convert time to hours and minutes * //
export const handleCalculateTime = (time) => {
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}m`;
};

// *Function to convert a number to money formatting * //
export const handleConvertMoney = (money) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });
  return formatter.format(money);
};
