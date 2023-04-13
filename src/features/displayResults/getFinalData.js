import { useEffect } from "react";
import { useState } from "react";
import { apiLinkHead } from "../baseLocalData/links";

export const useFinalData = (selectedUnit, selectedId) => {
  const [teritorialUnit, setTeritorialUnit] = useState({
    data: [],
    state: "loading"
  });

  useEffect(() => {
    const fetchResponse = async () => {
      try {
        const response = await fetch(`${apiLinkHead}/data/by-unit/${selectedUnit}?var-id=${selectedId}`);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        console.log("pobrało dane z ostatniego elementu");
        setTeritorialUnit({
          data,
          state: "success"
        });
      } catch {
        setTeritorialUnit({
          state: "fail"
        });
      }
    };
    fetchResponse();
  }, []);
  return teritorialUnit;
};