import { apiLinkCategory, apiLinkGroup, apiLinkHead } from "../links";

export const getCategory = async () => {
  try {
    const response = await fetch(`${apiLinkHead}${apiLinkCategory}`);

    if (!response.ok) {
      throw new Error(response.statusText);
    };
    return await response.json();

  } catch (error) {
    console.log(error);
  };
};

export const getGroup = async (categoryName) => {
  try {
    const response = await fetch(`${apiLinkHead}${apiLinkGroup}${categoryName}`);

    if (!response.ok) {
      throw new Error(response.statusText);
    };
    return await (response.json());

  } catch (error) {
    console.log(error);
  };
};




// export const useTeritorialUnit2 = (selectedGroup) => {
//   const [teritorialUnit, setTeritorialUnit] = useState({
//     data: [],
//     state: "loading"
//   });

//   useEffect(() => {
//     const fetchResponse = async () => {
//       try {
//         const response = await fetch(`${apiLinkHead}${apiLinkGroup}${selectedGroup}`);
//         if (!response.ok) {
//           throw new Error(response.statusText);
//         }
//         const data = await response.json();
//         console.log("pobrało dane z grupy");
//         setTeritorialUnit({
//           data,
//           state: "success"
//         });
//       } catch {
//         setTeritorialUnit({
//           state: "fail"
//         });
//       }
//     };
//     fetchResponse();
//   }, [selectedGroup]);
//   return teritorialUnit;
// };






















// export const getSubGroup = async () => {
//   try {
//     const response = await fetch(`${apiLinkHead}${apiLinkCategory}`);

//     if (!response.ok) {
//       throw new Error(response.statusText);
//     };
//     return await response.json();

//   } catch (error) {
//     console.log(error);
//   };
// };

// export const getCategory = async () => {
//   try {
//     const response = await fetch(`${apiLinkHead}${apiLinkCategory}`);

//     if (!response.ok) {
//       throw new Error(response.statusText);
//     };
//     return await response.json();

//   } catch (error) {
//     console.log(error);
//   };
// };