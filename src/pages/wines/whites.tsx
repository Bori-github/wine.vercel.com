import { NextPage } from "next";
import { WineContiner } from "../../components";

const WhitesPage: NextPage = () => {
  const name = "whites";

  return (
    <div>
      <WineContiner name={name} />
    </div>
  );
};

export default WhitesPage;
