import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import CountriesProvider from "../Context/CountriesProvider";
import ThemeProvider from "../Context/ThemeProvider";
export default function Layout() {
  return (
    <CountriesProvider>
      <ThemeProvider>
        <Header />
        <main className="p-6 sm:p-10 sm:max-w-md sm:mx-auto md:max-w-full lg:p-14">
          <Outlet />
        </main>
      </ThemeProvider>
    </CountriesProvider>
  );
}
