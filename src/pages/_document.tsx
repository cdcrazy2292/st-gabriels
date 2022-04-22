import { Html, Head, Main, NextScript } from "next/document"
import React from "react"

// eslint-disable-next-line require-jsdoc
export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/pnw6lgi.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
