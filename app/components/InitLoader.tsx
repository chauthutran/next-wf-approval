'use client'; // Important for Next.js App Router

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPeriods, setLocations, setItems } from "../redux/store";

export default function InitLoader() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const periodsJson = await (await fetch("/data/periods.json")).json();
        const locationsJson = await (await fetch("/data/locations.json")).json();
        const dataJson = await (await fetch("/data/data.json")).json();

        console.log("Fetched data:", dataJson);

        dispatch(setPeriods(periodsJson));
        dispatch(setLocations(locationsJson));
        dispatch(setItems(dataJson));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return null; // No UI needed, it's just for loading
}
