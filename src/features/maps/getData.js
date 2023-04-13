import { useEffect } from "react";
import { useState } from "react";
import { apiLinkHead, apiLinkProvincesId } from "../baseLocalData/links";

export const useProvincesId = (selectedVariables) => {
  const [teritorialUnit, setTeritorialUnit] = useState({
    data: [],
    state: "loading"
  });

  useEffect(() => {
    const fetchResponse = async () => {
      try {
        const response = await fetch(`${apiLinkHead}${apiLinkProvincesId}`);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
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