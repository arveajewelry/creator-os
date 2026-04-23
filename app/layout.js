export const metadata = {
  title: "Creator OS - The Content Engine That Runs Itself",
  description:
    "500 proven hooks, 240+ Veo prompts, and an autonomous publishing engine. Built by a solo founder who shipped 900+ viral reels. Ship daily without burning out.",
  openGraph: {
    title: "Creator OS - The Content Engine That Runs Itself",
    description:
      "500 proven hooks, 240+ Veo prompts, and an autonomous publishing engine.",
    url: "https://creator-os.vercel.app",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Instrument+Serif&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
