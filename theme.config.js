export default {
  repository: 'https://github.com/kobra-dev/Kobra',
  docsRepository: 'https://github.com/kobra-dev/docs',
  titleSuffix: ' – Kobra Docs',
  branch: 'master',
  path: '/',
  logo: (
    <>
      <img
        src="https://images.ctfassets.net/toxox86i0ilk/2vq3YtIZopT8UPfaEvzp9g/1bba1b1929fca469aaf554b6a3216310/GreenIconBlackText.svg"
        alt="Kobra logo"
        style={{
          maxHeight: '2rem',
          marginRight: '1rem',
          backgroundColor: 'white',
          padding: '4px',
          borderRadius: '3px',
        }}
      />
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
        content="The visual programming language for machine learning"
      />
      <meta
        name="og:description"
        content="The visual programming language for machine learning"
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
        content="Kobra Docs"
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
  UNSTABLE_stork: false,
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditOnGitHubLink: true,
  footerText: <>MIT {new Date().getFullYear()} © Kobra.</>,
}
