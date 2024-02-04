import React from "react";
import pagesData from "./SimpleInfoPages.json";
import SimplePage from "./SimplePage";
import { useLocation } from "react-router-dom";

import MotherHugging from "./images/mother_hugging.jpg";

const PageList = () => {
    const location = useLocation();
    const infoPageIndexValue = location.state?.infoPageIndex;
    const secondPage = pagesData[infoPageIndexValue];

    return (
        <div>
            <SimplePage {...secondPage} imageUrl={MotherHugging} />
        </div>
    );
};

export default PageList;
