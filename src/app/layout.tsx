
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-gray-100 text-gray-900"
      >
        <header> Next.js World</header>
        {children}
      </body>
    </html>
  );
}
