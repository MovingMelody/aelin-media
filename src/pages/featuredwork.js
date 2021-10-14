import React from "react";
import styled from "styled-components";
import img from "../assets/images/fea.png";

export default function featuredWork() {
  return (
    <div style={{ maxHeight: "100vh" }}>
      <Header>Featured Work</Header>
      <Description>
        we unlock your brand's potential to scale using content & tech. we help
        you discover ‘levers’ to pivot your product.
      </Description>
      <FeaturedWorkWrapper>
        <ItemWrapper>
          <EachItem></EachItem>
          <WorkTitle>Project Title</WorkTitle>
          <WorksubTitle>IOS, IoT</WorksubTitle>
        </ItemWrapper>
        <ItemWrapper>
          <EachItem></EachItem>
          <WorkTitle>Project Title</WorkTitle>
          <WorksubTitle>IOS, IoT</WorksubTitle>
        </ItemWrapper>
      </FeaturedWorkWrapper>
    </div>
  );
}
const Header = styled.h2`
  display: flex;
  font-size: 2.6rem;
  text-align: center;
  margin: 80px 0px 20px 0px;
  color: #ffffff;
  font-family: "MontBold";
  justify-content: center;
  @media screen and (max-width: 480px) {
    font-size: 1.4rem;
  }
`;
const WorkTitle = styled.h2`
  font-size: 1.25rem;
  color: #ffffff;
  margin: 0 12px;
  margin-top: 10px;

  @media screen and (max-width: 480px) {
    font-size: 1.4rem;
  }
`;
const WorksubTitle = styled.h2`
  font-size: 0.9rem;
  color: #ffffff;
  margin: 0 12px;
  margin-top: 2px;
  font-family: "MontRegular";
  @media screen and (max-width: 480px) {
    font-size: 1.4rem;
  }
`;
const FeaturedWorkWrapper = styled.div`
  display: grid;
  grid-gap: 8px;
  margin: 0 auto;
  grid-gap: 2em;
  max-width: 900px;
  margin-top: 60px;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: repeat(2, 360px);
`;

const Description = styled.p`
  text-align: center;
  display: flex;
  color: #def5ff;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 60vw;
  font-size: 1.35rem;
  @media screen and (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const EachItem = styled.div`
  background: white;
  border-radius: 6px;
  border: 1px solid rgba(204, 214, 246);
  background: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  margin: 0 12px;
`;
const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
