export const formatNumber = (number, isCurrency) => {
    if (isCurrency) {
      if (number < 0) {
        return (
          "-$" +
          Math.abs(number)
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, "$&,")
        );
      } else if (number === undefined || number === null || number === 0) {
        return "$0";
      } else return "$" + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    } else {
      if (number === undefined || number === null || number === 0) return "0";
      else return number.toFixed(0).replace(/\d(?=(\d{3})+$)/g, "$&,");
    }
  };
  