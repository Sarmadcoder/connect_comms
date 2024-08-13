import React from "react";
import { BeatLoader } from "react-spinners";

const Loader = () => {
    return (
        <div className="w-full fixed flex items-center justify-center top-0 right-0 h-full bg-neutral-50 z-50">
            <BeatLoader />
        </div>
    );
};

export default Loader;