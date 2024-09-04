import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Your Dashboard" },
    { name: "description", content: "Remix Banking App" },
  ];
};

export default function Dashboard() {
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">User Dashboard</h1>
      <Link to="/">Home</Link> &nbsp;&nbsp;
      <Link to="/services">Services</Link>
    </div>
  );
}
