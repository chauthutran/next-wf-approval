"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPeriods, setLocations, setItems } from "../redux/store";

import Footer from "./sectionFooter/Footer";
import Header from "./sectionHeader/Header";
import MainBody from "./sectionMainBody/MainBody";

export default function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        const periodsJson = await (await fetch("/data/periods.json")).json();
        const locationsJson = await (await fetch("/data/locations.json")).json();
        const dataJson = await (await fetch("/data/data.json")).json();

        console.log( "dataJson", dataJson );

        dispatch(setPeriods(periodsJson));
        dispatch(setLocations(locationsJson));
        dispatch(setItems(dataJson));
      } catch (error) {
        console.error("Error fetching periodData:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-48px)]">
       <main className="flex-grow">
        <MainBody />
        </main>
        
      <Footer />
    </div>
  );
}