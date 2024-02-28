
import {
  CardContainer,
  Image,
  Title,
  // Heading,
  // Description,
  // Arrow,
  ButtonCon,
  DetailsCon,
} from "./styled";

// import image from "../../images/content.svg"

const DeepLearnCards = (props) => {
  const { cardDetails } = props;
  const { title,  image } = cardDetails;
  return (
    <li>
      <CardContainer>
        <Image src={image} />
        <DetailsCon>
          <Title>{title}</Title>
        </DetailsCon>
        <ButtonCon> Learn More </ButtonCon>
      </CardContainer>
    </li>
  );
};

export default DeepLearnCards;
