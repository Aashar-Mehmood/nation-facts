import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import CountriesProvider from "../Context/CountriesProvider";
export default function Layout() {
  return (
    <CountriesProvider>
      <Header />
      <main className="px-4 py-6">
        <Outlet />
      </main>
    </CountriesProvider>
  );
}
