export const metadata = {
  title: 'Explore Movies',
  description: 'This is a IMDb clone website',
};

export default function RootLayout({ children }) {
  return (
    <main>
      <div>{children}</div>
    </main>
  );
}
