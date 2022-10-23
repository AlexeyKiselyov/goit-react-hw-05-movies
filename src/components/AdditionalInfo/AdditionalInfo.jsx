import { Link } from "react-router-dom";
import { AdditionalTitle,AdditionalList,AdditionalItem, } from "./AdditionalInfo.styled";

export const AdditionalInfo = () => {
  return (
    <>
      <AdditionalTitle>Additional information</AdditionalTitle>
      <AdditionalList>
        <AdditionalItem>
          <Link to="cast">Cast</Link>
        </AdditionalItem>
        <AdditionalItem>
          <Link to="reviews">Reviews</Link>
        </AdditionalItem>
      </AdditionalList>
    </>
  );
};
