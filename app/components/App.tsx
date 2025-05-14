"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPeriods, setLocations, setItems } from "../redux/store";

import Footer from "./sectionFooter/Footer";
import MainBody from "./sectionMainBody/MainBody";

export default function App() {
  return (
    <div className="flex flex-col h-[calc(100vh-48px)]">
        <main className="flex-grow">
          <MainBody />
        </main>
        
      <Footer />
    </div>
  );
}