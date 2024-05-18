import React from "react";
import routes from "../routes";
import { Route, Routes } from "react-router-dom";
import Layout from "./componets/Layout";
import Admin from "./componets/Admin/Admin";
import AdminLogin from "./componets/Admin/AdminLogin";
import NotFound from "./NotFound";
import AdminLayout from "./componets/Admin/AdminLayout";

const App = () => {
  return (
    <>
      <Routes>
        {routes.map((item, i) => {
          return (
            <Route
              key={i}
              path={item.path}
              element={<Layout Componet={item.component} title={item.title} />}
            />
          );
        })}
        {/* <Route path="/" element={<AdminLayout />}> */}
          <Route path="/admin" element={<AdminLayout componets={<Admin/>}/>} />
          <Route path="/admin/login" element={<AdminLayout componets={<AdminLogin/>} />} />
          <Route path="*" element={<NotFound/>} />
        {/* </Route> */}
      </Routes>
    </>
  );
};

export default App;
