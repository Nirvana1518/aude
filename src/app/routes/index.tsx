import { Route, Routes } from "react-router";
import { GalleryPage } from "../../pages/galleryPage";
import { ProfilePage } from "../../pages/profilePage";
import { LoginPage } from "../../pages/loginPage";
import { RegisterPage } from "../../pages/registerPage";

export const AppRoutes = () => {
  const navigationRoutes = [
    { path: "/user/:userId", element: <ProfilePage /> },
    { path: "/gallery/:userId", element: <GalleryPage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/registration", element: <RegisterPage /> },
  ];
  return (
    <Routes>
      {navigationRoutes.map((route) => (
        <Route path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};
