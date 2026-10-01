import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const Storefront = lazy(() => import("storefront/StorefrontApp"));

function App() {
  return (
    <div className="text-green-900">
      <Navbar />
      <Suspense fallback={<div>Storefront is loading....</div>}>
        <Storefront />
      </Suspense>
    </div>
  );
}

export default App;
