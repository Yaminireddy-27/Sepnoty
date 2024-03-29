import {
  Header,
  Service,
  ContentRecomContainer,
  ConRecHead,
  ConRecDesc,
  Rectangle1,
  Rectangle2,
  Rectangle3,
  Span,
  DigitalContainer,
  ListHeading,
  ServiceItemDesc,
  ImageCon,
  ServiceItemImg,
  ServiceItemButton,
  ServiceItemDetails,
  ServiceItemCon,
  ConatctCon,
  PatternCon,
  SmallPattern,
} from "./styled";

import { Link } from "react-router-dom";

import rectangle1 from "../Images/Rectangle 1.svg";
import rectangle2 from "../Images/Rectangle2.svg";
import rectangle3 from "../Images/Rectangle3.svg";

import DM from "../Images/Digitalmarketing.svg";
import SEO from "../Images/seo.svg";
import SMM from "../Images/smm.svg";
import CM from "../Images/ContentMarketing.svg";
import ContactForm from "../../ContactUs/ContactForm";
import FooterSection from "../../Footer/FooterSection";

const DigitalMarketing = () => {
  const heading = "Have a question to our team or need help with your project?";
  return (
    <>
      <DigitalContainer>
        <Header>
          Services &gt; <Span>DigitalMarketing</Span>
        </Header>
        <Service>Services</Service>
        <ContentRecomContainer>
          <ConRecHead>DigitalMarketing</ConRecHead>
          <ConRecDesc>
            "The aim of marketing is to know and understand the customer so well
            the services or products fit them and sell itself."
          </ConRecDesc>
          <Rectangle3 src={rectangle3} alt="not-found" />
          <Rectangle2 src={rectangle2} alt="not-found" />
          <Rectangle1 src={rectangle1} alt="not-found" />
        </ContentRecomContainer>
        <ServiceItemCon>
          <div>
            <PatternCon>
              <SmallPattern></SmallPattern>
              <ListHeading>Services of DigitalMarketing</ListHeading>
            </PatternCon>

            <ServiceItemDetails>
              <ServiceItemDesc>
                Digital marketing services encompass a wide range of strategies
                and tactics aimed at promoting businesses, products, or services
                online
              </ServiceItemDesc>
              <ImageCon>
                <ServiceItemImg src={DM} alt="dm" />
                <ServiceItemButton>Learn More</ServiceItemButton>
              </ImageCon>
            </ServiceItemDetails>
          </div>

          <div>
            <PatternCon>
              <SmallPattern></SmallPattern>
              <ListHeading>Search Engine Optimization (SEO)</ListHeading>
            </PatternCon>

            <ServiceItemDetails>
              <ServiceItemDesc>
                Optimizing a website to rank higher in search engine results
                pages (SERPs) for relevant keywords. This involves on-page
                optimization, content creation, link building, and technical
                SEO.
              </ServiceItemDesc>
              <ImageCon>
                <ServiceItemImg src={SEO} alt="seo" />
                <Link to="/Services/Digital-Marketing/SEO">
                  {" "}
                  <ServiceItemButton>Learn More</ServiceItemButton>{" "}
                </Link>
              </ImageCon>
            </ServiceItemDetails>
          </div>

          <div>
            <PatternCon>
              <SmallPattern></SmallPattern>
              <ListHeading>Social Media Marketing (SMM)</ListHeading>
            </PatternCon>

            <ServiceItemDetails>
              <ServiceItemDesc>
                Promoting brands, products, or services on social media
                platforms like Facebook, Twitter, Instagram, LinkedIn, and
                others. This involves creating and sharing content, engaging
                with followers, and running paid advertising campaigns.
              </ServiceItemDesc>
              <ImageCon>
                <ServiceItemImg src={SMM} alt="smm" />
                <ServiceItemButton>Learn More</ServiceItemButton>
              </ImageCon>
            </ServiceItemDetails>
          </div>
          <div>
            <PatternCon>
              <SmallPattern></SmallPattern>
              <ListHeading>Content Marketing</ListHeading>
            </PatternCon>

            <ServiceItemDetails>
              <ServiceItemDesc>
                Creating and distributing valuable, relevant, and consistent
                content to attract and retain a clearly defined audience.
                Content marketing can include blog posts, articles, videos,
                infographics, podcasts, and more.
              </ServiceItemDesc>
              <ImageCon>
                <ServiceItemImg src={CM} alt="cm" />
                <ServiceItemButton>Learn More</ServiceItemButton>
              </ImageCon>
            </ServiceItemDetails>
          </div>
        </ServiceItemCon>
      </DigitalContainer>
      <ConatctCon>
        <ContactForm heading={heading} />
      </ConatctCon>
      <FooterSection />
    </>
  );
};

export default DigitalMarketing;
