import React, { Suspense } from "react";
import PageLoader from "../components/PageLoader";


const NitroOtp = React.lazy(() => import("../views/NitroOtp"));

const NitroOtpRoute = () => {

    return (
        <>
            {loading ? (
                <PageLoader />
            ) : (
                <Suspense fallback={null}>
                    <NitroOtp />
                </Suspense>
            )}
        </>
    );
};

export default NitroOtpRoute;
