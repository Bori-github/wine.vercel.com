import { NextPage } from "next";
import { Wine } from "../../types/Wine";
import { useWineData } from "../../hooks/useWineData";

const PortPage: NextPage = () => {
  const { data, error } = useWineData("port");

  if (error) return <div>Faild to Loading...</div>;
  if (!data) return <div>...Loading</div>;

  return (
    <div>
      <h1>Port</h1>
      <main>
        {data.map((wineData: Wine) => {
          const { id, wine, winery } = wineData;

          return (
            // map을 쓸 때 key가 꼭 필요하다
            <div key={`port-wine-list-${wineData.id}`}>
              <h1>{wine}</h1>
              <p>{winery}</p>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default PortPage;
