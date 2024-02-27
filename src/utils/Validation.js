export const validation = (number, isChecked) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        /^\d+$/.test(number) &&
        number.length >= 9 &&
        number.length <= 13 &&
        isChecked === true
      ) {
        resolve(true);
      } else {
        reject("Async operation failed");
      }
    }, 2000);
  });
};

export const isValidNumberTelepon = (number) => {
  return /^\d+$/.test(number) && number.length >= 9 && number.length <= 13;
};
