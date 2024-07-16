const Price=({price}: {price: number}) => {
    return <p className="font-medium text-tertiary text-base">{price.toFixed(2)}$</p>;
}

export default Price;