import { NextPage } from "next";
import { Beer } from "../../types/Beer";
import { useBeerData } from "../../hooks/useBeersData";

const AlePage: NextPage = () => {
  const { data, error } = useBeerData("ale");

  if (error) return <div>Faild to Loading...</div>;
  if (!data) return <div>...Loading</div>;

  return (
    <div>
      <h1>Ale</h1>
      <main>
        {data.map((beerData: Beer) => {
          const { id, name, price } = beerData;

          return (
            <div key={`ale-beer-list-${beerData.id}`}>
              <h1>{name}</h1>
              <p>{price}</p>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default AlePage;
