import React from 'react'
import { Helmet } from "react-helmet";

export default function TitleManager({title = "", conicalURL = ""}) {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>TurboBoost™ | {title}</title>
            <link rel="canonical" href={`https://dashboard.turbo-boost.io/${conicalURL}`} />
        </Helmet>
    )
}
