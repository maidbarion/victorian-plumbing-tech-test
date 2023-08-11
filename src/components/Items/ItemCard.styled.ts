import styled from "styled-components";

export const CardContainer = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 150px;
  padding: 20px;
  margin: 0 20px 20px 0;
  background-color: #ccc;
  min-height: 132px;

  & > *:not(:first-child) {
    padding-top: 20px;
  }
`;
