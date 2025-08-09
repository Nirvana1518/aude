import { Route, Routes } from "react-router";
import { GalleryPage } from "../../pages/galleryPage";
import { ProfilePage } from "../../pages/profilePage";

export const AppRoutes = () => {
  const navigationRoutes = [
    { path: "/user/:userId", element: <ProfilePage /> },
    { path: "/gallery/:userId,", element: <GalleryPage /> },
  ];
  return (
    <Routes>
      {navigationRoutes.map((route) => (
        <Route path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};
