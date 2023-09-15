import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthLayout } from "../view/layouts/AuthLayout";
import { About } from "../view/pages/About";




export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
