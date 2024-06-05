interface PriceData {
  price: number;
  discount: number;
  isInstallment: boolean;
  months: number;
}

const getTotalPrice = ({
  price,
  discount,
  isInstallment,
  months,
}: PriceData): number => {
  if (isInstallment) {
    return (price - (price / 100) * 25) / months;
  }
  return price - (price / 100) * 25;
};

console.log(
  getTotalPrice({
    price: 100000,
    discount: 25,
    isInstallment: true,
    months: 12,
  })
);

console.log(
  getTotalPrice({
    price: 100000,
    discount: 25,
    isInstallment: false,
    months: 12,
  })
);
