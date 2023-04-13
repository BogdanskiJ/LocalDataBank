import { useEffect } from "react";
import { useState } from "react";
import { apiLinkHead, apiLinkGroup } from "../links";

export const useTeritorialUnit2 = (selectedGroup) => {
  const [teritorialUnit, setTeritorialUnit] = useState({
    data: [],
    state: "loading"
  });

  useEffect(() => {
    const fetchResponse = async () => {
      try {
        const response = await fetch(`${apiLinkHead}${apiLinkGroup}${selectedGroup}`);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        console.log("pobrało dane z grupy");
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
  }, [selectedGroup]);
  return teritorialUnit;
};