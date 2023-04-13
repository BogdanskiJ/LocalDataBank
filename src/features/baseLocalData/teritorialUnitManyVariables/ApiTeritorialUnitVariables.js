import { useEffect } from "react";
import { useState } from "react";
import { apiLinkHead, apiLinkVariables } from "../links";

export const useTeritorialUnit4 = (selectedVariables) => {
  const [teritorialUnit, setTeritorialUnit] = useState({
    data: [],
    state: "loading"
  });

  useEffect(() => {
    const fetchResponse = async () => {
      try {
        const response = await fetch(`${apiLinkHead}${apiLinkVariables}${selectedVariables}`);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        console.log("pobrało dane z podgrupy");
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
  }, [selectedVariables]);
  return teritorialUnit;
};