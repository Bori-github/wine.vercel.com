import { NextPage } from "next";
import { WineContainer } from "../../components";

const SparklingPage: NextPage = () => {
  const name = "sparkling";

  return (
    <div>
      <WineContainer name={name} />
    </div>
  );
};

export default SparklingPage;
