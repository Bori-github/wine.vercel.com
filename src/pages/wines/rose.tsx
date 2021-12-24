import { NextPage } from "next";
import { WineContiner } from "../../components";

const RosePage: NextPage = () => {
  const name = "rose";

  return (
    <div>
      <WineContiner name={name} />
    </div>
  );
};

export default RosePage;
