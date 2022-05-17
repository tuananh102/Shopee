import * as React from "react";
import { Outlet } from "react-router-dom";

export default function Order() {
  return (
    <section className="admin-category">
      <Outlet />
    </section>
  );
}
