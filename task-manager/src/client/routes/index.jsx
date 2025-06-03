import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PersistentLayout from "./persistLayout";
import { loginPath, rootPath } from "./routePath";
import { AuthProvider } from "@utils/authProvider";
import ProtectedRoute from "./protectedRoute";

const Dashboard = lazy(() => import("@pages/dashboard"));
const Login = lazy(() => import("@pages/login"));

const AllRoutes = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Suspense
          fallback={
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "100vh" }}
            >
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "100vh" }}
                role="status"
                aria-label="Loading"
              >
                <div
                  className="spinner-border text-primary"
                  role="status"
                  aria-hidden="true"
                  style={{ width: "3rem", height: "3rem" }}
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
                <span
                  className="ms-3 fw-semibold"
                  style={{ fontSize: "1.25rem", color: "#0d6efd" }}
                >
                  Loading...
                </span>
              </div>
            </div>
          }
        >
          <Routes>
            {/* Redirect root to login */}
            <Route path="/" element={<Navigate to={loginPath} />} />

            {/* Public login route */}
            <Route path={loginPath} element={<Login />} />

            {/* Protected dashboard route inside PersistentLayout */}
            <Route
              path={rootPath}
              element={
                <ProtectedRoute>
                  <PersistentLayout />
                </ProtectedRoute>
              }
            >
              <Route path="dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default AllRoutes;
