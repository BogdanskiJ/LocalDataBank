import { useEffect } from "react";
import { useState } from "react";
import { strategLink } from "../link";

export const useStrategiesProgrammes = () => {
  const newLink = "/api/statistics-by-theme?lang=pl";
  const [strategiesProgrammes, setStrategiesProgrammes] = useState({
    data: [],
    state: "loading"
  });

  useEffect(() => {
    const fetchResponse = async () => {
      try {
        const response = await fetch(`${strategLink}${newLink}`);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setStrategiesProgrammes({
          data,
          state: "success"
        });
      } catch {
        setStrategiesProgrammes({
          state: "fail"
        });
      }
    };
    setTimeout(fetchResponse, 1000);
  }, []);
  return strategiesProgrammes;
};