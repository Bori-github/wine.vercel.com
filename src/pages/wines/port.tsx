import { NextPage } from "next";
import { WineContainer } from "../../components";

const PortPage: NextPage = () => {
  const name = "port";

  return (
    <div>
      <WineContainer name={name} />
    </div>
  );
};

export default PortPage;
