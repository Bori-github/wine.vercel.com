import { Error, Loading, WineCard } from ".";
import { useWineData } from "../hooks/useWineData";
import { Wine } from "../types/Wine";

interface WineContinerProps {
  name: string;
}

export const WineContainer = ({ name }: WineContinerProps) => {
  const { data, error } = useWineData(name);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      <h1>{name} wine</h1>
      <WineContainer>
        {data.map(wineData: Wine) => {
          return (
            <WineCard
              key={`${name}-wine-list-${wineData.id}`}
              wineData={wineData}
            />
          )
        }}
      </WineContainer>
    </div>
  )
};
