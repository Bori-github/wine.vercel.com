import styled from "@emotion/styled";
import { Wine } from "../types/Wine";

interface WineProps {
  wineData: Wine;
}

export const WineCard = ({ wineData }: WineProps) => {
  const { wine, winery, image, location, rating } = wineData;

  return (
    <Container>
      <img src={image} alt="" />
      <h2>
        {wine}
        <Average>{rating.average}</Average>
      </h2>
      <p>
        {winery} - {location}
      </p>
      <p>
        별점:
        {rating.reviews.replace(" ratings", "")}
      </p>
    </Container>
  );
};
