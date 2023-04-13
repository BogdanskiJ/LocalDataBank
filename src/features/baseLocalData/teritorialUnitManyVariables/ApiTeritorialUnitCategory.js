import { useEffect } from "react";
import { useState } from "react";
import { apiLinkHead, apiLinkCategory } from "../links";

export const useTeritorialUnit = () => {
  const [teritorialUnit, setTeritorialUnit] = useState({
    data: [],
    state: "loading"
  });

  useEffect(() => {
    const fetchResponse = async () => {
      try {
        const response = await fetch(`${apiLinkHead}${apiLinkCategory}`);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        console.log("pobrało dane z kategorii");
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