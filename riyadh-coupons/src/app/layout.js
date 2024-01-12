import "./globals.css";

export const metadata = {
  title: "كوبون الرياض",
  description: "Riyadh Coupons كوبون الرياض",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
