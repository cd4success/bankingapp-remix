import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Services" },
    { name: "description", content: "Remix Banking App" },
  ];
};

export default function Services() {
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">Services Page</h1>
      <Link to="/">Home</Link> &nbsp;&nbsp;
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
}