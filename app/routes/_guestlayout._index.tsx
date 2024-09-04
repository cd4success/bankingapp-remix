import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Banking App" },
    { name: "description", content: "Remix Banking App" },
  ];
};

export default function Home() {
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">Homepage</h1>
      <p className="text-xl">Banking App - Remix</p>
      <Link to="/services">Services</Link> &nbsp;&nbsp;
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
}
