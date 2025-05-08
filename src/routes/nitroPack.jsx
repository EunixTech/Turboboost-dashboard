import React, { Suspense } from "react";
import PageLoader from "../components/PageLoader";


const NitroPack = React.lazy(() => import("../views/NitroPack"));

const NitroPackRoute = () => {

    return (
        <>
            {loading ? (
                <PageLoader />
            ) : (
                <Suspense fallback={null}>
                    <NitroPack />
                </Suspense>
            )}
        </>
    );
};

export default NitroPackRoute;
