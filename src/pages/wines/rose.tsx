import { NextPage } from "next";
import { Wine } from "../../types/Wine";
import { useWineData } from "../../hooks/useWineData";

const RosePage: NextPage = () => {
  const { data, error } = useWineData("rose");

  if (error) return <div>Faild to Loading...</div>;
  if (!data) return <div>...Loading</div>;

  return (
    <div>
      <h1>Rose</h1>
      <main>
        {data.map((wineData: Wine) => {
          const { id, wine, winery } = wineData;

          return (
            <div key={`rose-wine-list-${wineData.id}`}>
              <h1>{wine}</h1>
              <p>{winery}</p>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default RosePage;
