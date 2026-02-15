import {
  VerticalAlignContainer,
  VerticalAlignContent,
  PrimaryColor,
} from "./stockAnalysisDashboard";
import styled from "styled-components";
import numabbr from "numabbr";

const NumberDisplay = styled.div`
  color: ${PrimaryColor};
  font-size: 20px;
`;

const ValueDisplay = styled.div`
  font-weight: bold;

  font-size: 14px;
`;
function NumberStat({
  value,
  label,
  center,
}: {
  value: number;
  label: string;
  center?: boolean;
}) {
  return (
    <div>
      <VerticalAlignContainer style={{ textAlign: center ? "center" : "left" }}>
        <VerticalAlignContent>
          <NumberDisplay>{numabbr(value)}</NumberDisplay>
          <ValueDisplay>{label}</ValueDisplay>
        </VerticalAlignContent>
      </VerticalAlignContainer>
    </div>
  );
}
export default NumberStat;
