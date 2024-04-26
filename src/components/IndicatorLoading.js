import { useEffect } from "react";
import { useSelector } from "react-redux";

const IndicatorLoading = () => {
    const isLoading = useSelector(state => state.loading.isLoading);

    useEffect( () => {
        console.log("isLoading: ", isLoading)
    }, [isLoading])

    return (
        isLoading && <div className="overlay disable-interaction">
            <div className="spinner"></div>
        </div>
    )
};

export default IndicatorLoading;
