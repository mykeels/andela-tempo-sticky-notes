import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <base href={process.env.PUBLIC_URL || "/"} />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="description"
          content="Simple sticky notes app built with Next.js, React, TypeScript, Tailwind CSS, and React Query"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
