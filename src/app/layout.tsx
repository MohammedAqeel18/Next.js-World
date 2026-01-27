
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       
      >
        <header> Next.js World</header>
        {children}
      </body>
    </html>
  );
}
