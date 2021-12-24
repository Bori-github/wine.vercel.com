import { NextPage } from "next";
import { WineContiner } from "../../components";

const PortPage: NextPage = () => {
  const name = "port";

  return (
    <div>
      <WineCardList name={name} />
    </div>
  );
};

export default PortPage;
