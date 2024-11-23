import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Provider } from "react-redux";
import store from "./store/store.js";
import ThemeWrapper from "./theme/ThemeWrapper";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeWrapper>
        <RouterProvider router={router} />
      </ThemeWrapper>
    </Provider>
  </StrictMode>
);
