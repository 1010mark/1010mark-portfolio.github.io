import "./globals.css";
import Header from "./header";
import Footer from "./footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <div className="md:w-10/12 p-4 mx-auto">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
