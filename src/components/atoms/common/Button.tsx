const Button=({onClick,label,color}: {onClick: () => void,label: string; color?: string}) => {
    return <button className={` border-solid border-2 border-border text-primary active:text-fourth active:bg-tertiary border-brown p-2 rounded-lg bg-tertiary font-semibold mt-4 text-sm ${color}`} onClick={onClick}>
        {label}
    </button>;
}

export default Button;