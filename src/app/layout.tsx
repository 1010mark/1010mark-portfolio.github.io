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
      <body className="w-screen overflow-x-hidden">
        <Header />
        <div className="md:w-10/12 p-4 pt-0 mx-auto">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
