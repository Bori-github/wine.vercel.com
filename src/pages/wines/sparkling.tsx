import { NextPage } from "next";
import { WineContiner } from "../../components";

const SparklingPage: NextPage = () => {
  const name = "sparkling";

  return (
    <div>
      <WineContiner name={name} />
    </div>
  );
};

export default SparklingPage;
