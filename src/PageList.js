import React from "react";
import pagesData from "./SimpleInfoPages.json";
import SimplePage from "./SimplePage";

import MotherHugging from "./images/mother_hugging.jpg";

const PageList = () => {
    const secondPage = pagesData[1];

    return (
        <div>
            <SimplePage {...secondPage} imageUrl={MotherHugging} />
        </div>
    );
};

export default PageList;
