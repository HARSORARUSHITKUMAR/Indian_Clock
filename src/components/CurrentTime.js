import { useEffect, useState } from "react";

let CurrentTime = () => {

    const [time, setTime] = useState(new Date());


    useEffect(() => {

        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 500);

        return () => {
            clearInterval(intervalId);

        }

    }, []);

    return <p className="lead">
        This Is The Current Time : {time.toLocaleDateString()} - {" "}
        {time.toLocaleTimeString()}
    </p>;
};

export default CurrentTime;