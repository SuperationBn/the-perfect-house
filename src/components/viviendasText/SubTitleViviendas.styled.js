const { default: styled } = require("styled-components");

export const SectionSubTitleViviendas = styled.section`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 9rem 1rem 4rem 1rem;

  h2 {
    font-size: 6rem;
    text-transform: capitalize;
    font-weight: 600;

    @media (max-width: 346px) {
      font-size: 4rem;
    }
  }
  
  p {
    margin-top: 3rem;
    font-size: 1.6rem;

    @media (max-width: 346px) {
      font-size: 1.4rem;
      line-height: 1.7;
    }
  }
`;