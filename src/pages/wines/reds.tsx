import { NextPage } from "next";
import { Wine } from "../../types/Wine";
import { useWineData } from "../../hooks/useWineData";

const RedsPage: NextPage = () => {
  const { data, error } = useWineData("reds");

  if (error) return <div>Faild to Loading...</div>;
  if (!data) return <div>...Loading</div>;

  return (
    <div>
      <h1>Reds</h1>
      <main>
        {data.map((wineData: Wine) => {
          const { id, wine, winery } = wineData;

          return (
            <div key={`reds-wine-list-${wineData.id}`}>
              <h1>{wine}</h1>
              <p>{winery}</p>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default RedsPage;
