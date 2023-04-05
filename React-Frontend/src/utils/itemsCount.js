//Get the current count of products in the shopping cart for display in 'shop.js'
export default function itemsCount(props) {
  const { cart } = props;
  return cart.length !== 0
    ? cart.reduce(
        (sum, item) =>
          Number.isSafeInteger(sum + item.count) ? sum + item.count : sum,
        0
      )
    : "";
}
