export const convertToRupee = (price) => {
    price = parseInt(price);
    return price.toLocaleString("en-IN");
  };
  export const convertGuaranteeCaption = (guarantee) => {
    return guarantee === 1 ? `1 YEAR GUARANTEE` : `${guarantee} YEARS GUARANTEE`;
  };