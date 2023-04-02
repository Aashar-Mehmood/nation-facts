import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import CountriesProvider from "../Context/CountriesProvider";
import ThemeProvider from "../Context/ThemeProvider";
export default function Layout() {
  return (
    <CountriesProvider>
      <ThemeProvider>
        <Header />
        <main className="px-4 py-6">
          <Outlet />
        </main>
      </ThemeProvider>
    </CountriesProvider>
  );
}
