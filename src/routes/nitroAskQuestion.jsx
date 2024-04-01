import React, { Suspense } from "react";
import PageLoader from "../components/PageLoader";


const NitroAskQuestion = React.lazy(() => import("../views/NitroAskQuestion"));

const NitroQuestionRoute = () => {

    return (
        <>
            {loading ? (
                <PageLoader />
            ) : (
                <Suspense fallback={null}>
                    <NitroAskQuestion />
                </Suspense>
            )}
        </>
    );
};

export default NitroQuestionRoute;
