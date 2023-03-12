import { useStrategiesProgrammes } from "./getApi";

const StrategiesProgrammes = () => {

  const strategiesProgrammes = useStrategiesProgrammes();

  return (
    <>
      <div>Dane statystyczne</div>
      {(strategiesProgrammes.data).map((strategie) => <div key={strategie.id}>{strategie.name}</div>)}
    </>
  )
};

export default StrategiesProgrammes;