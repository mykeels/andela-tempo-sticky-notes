import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const root = process.env.PUBLIC_URL || "";
  return (
    <Html lang="en">
      <Head>
        <base href={root} />
        <link rel="shortcut icon" href={`${root}/favicon.svg`} />
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
