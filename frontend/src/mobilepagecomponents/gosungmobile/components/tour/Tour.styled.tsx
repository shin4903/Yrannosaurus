import styled from 'styled-components';

const StyldTourCategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTourCategoryButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* gap: 20px; */
  /* padding: 20px; */
  /* max-height: 20vh; */
  overflow: scroll;
`;

const StyledTourCategoryButton = styled.button.attrs<any>((props) => ({}))`
  /* border-radius: 20px; */
  background-color: ${(props) => (props.name === props.select ? props.theme.colors.menu : props.theme.colors.main)};
  color: ${(props) => (props.name === props.select ? props.theme.colors.main : props.theme.colors.white)};
  font-size: 15px;
  padding-bottom: 10px;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  border: hidden;
  width: 100px;
  flex: 1;

  font-family: ${(props) => props.theme.fonts.regularfont};
`;

const StyledTourListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  overflow: scroll;
  max-height: 40vh;
  padding: 10px;
`;
const StyledTourContent = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid black;
  position: relative;
`;

const StyledTourImg = styled.img.attrs<any>((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 100%;
  height: 100%;
`;
const StyledTourName = styled.div`
  font-family: ${(props) => props.theme.fonts.regularfont};
  font-size: 15px;
  position: absolute;
  bottom: 0px;
  left: 10px;
`;

const StyledCategotyContainer = styled.div`
  display: flex;
  width: 100%;
`;

export {
  StyldTourCategoryContainer,
  StyledTourCategoryButtonContainer,
  StyledTourCategoryButton,
  StyledTourListContainer,
  StyledTourContent,
  StyledTourImg,
  StyledTourName,
  StyledCategotyContainer,
};
