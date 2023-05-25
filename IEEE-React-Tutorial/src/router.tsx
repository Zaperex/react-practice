import { Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
import IntroPage from "./Pages/IntroPage";
import MessagePage from "./Pages/MessagePage";

function Router() {
  return (
    <Routes>
      <Route index path="/" element={<HomePage />} />
      <Route path="/contact-me" element={<ContactPage />} />
      <Route path="/message-me" element={<MessagePage />} />
      <Route path="/about-me" element={<IntroPage />} />
    </Routes>
  );
}

export default Router;
