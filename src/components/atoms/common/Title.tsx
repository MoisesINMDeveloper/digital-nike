const Title=({title,color}: {title: string,color?: string}) => {
    return <h1 className={`text-tertiary  font-bold text-xl ${color}`}>{title}</h1>;
}

export default Title;