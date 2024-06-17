import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";

import App from "./App";
import Pages from "pages";
import Home from "pages/home";
import Components, { 
  InputDemo, 
  DialogDemo, ModalDemo, UploadDemo,
} from "pages/components";

import Forms from "pages/forms";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Pages />}></Route>

        <Route path="pages" element={<Pages />}>
          <Route index element={<Home />}></Route>

          <Route path="components" element={<Components />}>
            <Route path="upload_demo" element={<UploadDemo />}></Route>
            <Route path="dialog_demo" element={<DialogDemo />}></Route>
            <Route path="modal_demo" element={<ModalDemo />}></Route>
            <Route path="input_demo" element={<InputDemo />}></Route>
          </Route>

          <Route path="forms" element={<Forms />}></Route>
        </Route>
      </Route>
    </Routes>
  </Router>,
);
