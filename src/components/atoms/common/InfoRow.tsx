

const InfoRow=({label,value}: {label: string,value: string}) => (
    <p className="mb-2 flex flex-row items-center justify-between text-tertiary">
        <strong>{label}:</strong> {value}
    </p>
);

export default InfoRow;

