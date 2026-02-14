import styled from "styled-components";
import { PrimaryColor } from "./stockAnalysisDashboard";

interface NewsLink {
  title: string;
  url: string;
}

interface NewsLinksListProps {
  newsLinks: NewsLink[];
}

/* ================= Styled Components ================= */

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
`;

const StyledLink = styled.a`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;
  color: ${PrimaryColor};
  font-size: 0.95rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

function NewsList({ newsLinks }: NewsLinksListProps) {
  return (
    <Container>
      <div
        style={{
          padding: "0.8rem",
          fontWeight: "bold",
          background: "white",
          borderBottom: "1px solid #e5e5e5",
          position: "sticky",
          top: 0,
          zIndex: 1,
        }}
      >
        In the News
      </div>
      {newsLinks.map((item, index) => {
        console.log(item.url);

        return (
          <StyledLink
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.title}
          </StyledLink>
        );
      })}
    </Container>
  );
}

export default NewsList;
