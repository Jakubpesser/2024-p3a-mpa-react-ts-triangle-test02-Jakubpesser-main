import {FC} from "react";

type TriangleInfoProps = {
    alpha: number;
    beta: number;
    gamma: number;
    perimeter: number;
    area: number;
};

const TriangleInfo:FC<TriangleInfoProps> = ({alpha, beta, gamma, perimeter, area}) => {
    return (
        <div>
            <h1>Information</h1>
            <p>Angle α is {alpha}°.</p>
            <p>Angle β is {beta}°.</p>
            <p>Angle γ is {gamma}°.</p>
            <p>Perimeter is {perimeter} m.</p>
            <p>Area is {area} m².</p>
        </div>
    )
    
}

export default TriangleInfo;