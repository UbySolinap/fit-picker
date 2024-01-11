import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Main from "./pages/Main";
import Statistics from "./pages/Statistics";
import UserSettings from "./pages/UserSettings";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="outfit-picker" />} />
            <Route path="outfit-picker" element={<Main />} />
            <Route path="statistics" element={<Statistics />} />
            <Route path="user-settings" element={<UserSettings />} />
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
