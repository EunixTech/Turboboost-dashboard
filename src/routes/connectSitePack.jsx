import React, { Suspense } from "react";
import PageLoader from "../components/PageLoader";


const ConnectSiteNitro = React.lazy(() => import("../views/ConnectSiteNitro"));

const NitroPackRoute = () => {

    return (
        <>
            {loading ? (
                <PageLoader />
            ) : (
                <Suspense fallback={null}>
                    <ConnectSiteNitro />
                </Suspense>
            )}
        </>
    );
};

export default NitroPackRoute;
