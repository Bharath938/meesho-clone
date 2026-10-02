import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Category from "./components/Category";

const Storefront = lazy(() => import("storefront/StorefrontApp"));

function App() {
  return (
    <div className="font-sans">
      <header className="sticky top-0">
        <Navbar />
        <Category />
      </header>
    </div>
  );
}

export default App;
