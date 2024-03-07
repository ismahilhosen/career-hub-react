import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const naviget = useNavigate()
    return (
        <div>
            <h3>oops !! </h3>
            <button className="btn" onClick={()=> naviget(-1)}>Back</button>
        </div>
    );
};

export default ErrorPage;