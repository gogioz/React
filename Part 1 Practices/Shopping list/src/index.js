import { StrictMode, Suspense } from "react";
// import  {  }
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const loadingMArkup = (
  <div className="py-4 text-center">
    <h2>Loading...</h2>
  </div>
);

root.render(
  <Suspense fallback={loadingMArkup}>
    <StrictMode>
      <App />
    </StrictMode>
  </Suspense>
);
