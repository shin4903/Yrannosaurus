import styled from 'styled-components';

const StyledTourismListContainer = styled.div``;

const StyledTourismContainer = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightgray};
  cursor: pointer;
`;

const StyledTourismInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
`;

const StyledTourismName = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => props.theme.colors.light};
  font-size: 17px;
`;

const StyledTourismImg = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 10px;
  margin: 10px;
`;

export { StyledTourismContainer, StyledTourismImg, StyledTourismInfo, StyledTourismName, StyledTourismListContainer };