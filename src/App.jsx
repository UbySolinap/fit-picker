import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Main from "./pages/Main";
import Statistics from "./pages/Statistics";
import UserSettings from "./pages/UserSettings";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
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

      <Toaster
        position="top-center"
        gutter={12}
        containStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
            icon: false,
          },
          error: {
            duration: 5000,
            icon: false,
          },
          className: "bg-color-dark-gray text-white font-semibold text-lg",
          style: {
            maxWidth: "500px",
            padding: "8px 15px",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
