import { NextPage } from "next";
import { WineContiner } from "../../components";

const DessertPage: NextPage = () => {
  const name = "dessert";

  return (
    <div>
      <WineContainer name={name} />
    </div>
  );
};

export default DessertPage;
