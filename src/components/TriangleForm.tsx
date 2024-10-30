import {ReactNode, FC} from "react";

type TriangleFormProps = {
    children: ReactNode;
  };
  
  const TriangleForm: FC<TriangleFormProps> = ({children}) => {
    return (
      <div className="form">
        {children}
      </div>
    );
  };

export default TriangleForm;