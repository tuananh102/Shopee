import * as React from "react";
import { Outlet } from "react-router-dom";

export default function Category() {
  return (
    <section className="admin-category">
      <Outlet />
    </section>
  );
}
