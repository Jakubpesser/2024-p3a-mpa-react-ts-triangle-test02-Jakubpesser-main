import {FC} from "react";

type TriangleInputProps = {
    label: string;
    input: number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const TriangleInput:FC<TriangleInputProps> = ({label, input, onChange}) => (
    <div className="input">
        <label>{label}</label>
        <input type="number" value={input} onChange={onChange} min='1' required/>
    </div>
)


export default TriangleInput;