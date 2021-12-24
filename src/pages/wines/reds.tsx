import { NextPage } from "next";
import { WineCardList } from "../../components/WineCardList";

const RedsPage: NextPage = () => {
  const name = "reds";

  return (
    <div>
      <WineCardList name={name} />
    </div>
  );
};

export default RedsPage;
