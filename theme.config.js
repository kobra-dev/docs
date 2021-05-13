export default {
  repository: 'https://github.com/kobra-dev/Kobra',
  docsRepository: 'https://github.com/kobra-dev/docs',
  titleSuffix: ' – Kobra Docs',
  branch: 'master',
  path: '/',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Kobra</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Documentation
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="description"
        content="The Visual programming language for Machine  Learing"
      />
      <meta
        name="og:description"
        content="The Visual programming language for Machine  Learing"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:image"
        content="https://raw.githubusercontent.com/kobra-dev/branding/main/embed_image.png"
      />
      <meta name="twitter:site:domain" content="https://kobra.dev/" />
      <meta name="twitter:url" content="https://kobra.dev/" />
      <meta
        name="og:title"
        content="The Visual programming language for Machine  Learing"
      />
      <meta
        name="og:image"
        content="https://raw.githubusercontent.com/kobra-dev/branding/main/embed_image.png"
      />
      <meta name="apple-mobile-web-app-title" content="Nextra" />{' '}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://raw.githubusercontent.com/kobra-dev/branding/main/favicon.ico"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="https://raw.githubusercontent.com/kobra-dev/branding/main/favicon.ico"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="https://raw.githubusercontent.com/kobra-dev/branding/main/favicon.ico"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  UNSTABLE_stork: true,
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditOnGitHubLink: true,
  footerText: <>MIT {new Date().getFullYear()} © Kobra.</>,
}
