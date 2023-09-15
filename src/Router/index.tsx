import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthLayout } from "../view/layouts/AuthLayout";
import { About } from "../view/pages/About";
import { Skills } from "../view/pages/Skills";




export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Skills />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
