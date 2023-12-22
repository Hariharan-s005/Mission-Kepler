import  {guaranteeTextConstants} from'../constants/guaranteeTextConstants';

export const convertToRupee = (price) => {
  return new Intl.NumberFormat("en-IN").format(price);
};
export const convertGuaranteeCaption = (guarantee) => {
  return guarantee === 1 ? `${guaranteeTextConstants.ONE} ${guaranteeTextConstants.YEAR_GUARANTEE}` : `${guarantee} ${guaranteeTextConstants.YEARS_GUARANTEE}`;
};
