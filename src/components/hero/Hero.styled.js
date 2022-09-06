const { default: styled } = require("styled-components");

export const SectionHero = styled.section`
  max-width: 1200px;
  width: 100%;
  padding: 1rem;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  

  @media (min-width: 810px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: 810px) {
    padding: 8rem 1rem;
  }

  .textContainerHero {
    text-align: center;

    @media (min-width: 810px){
      text-align: left;
      padding: 1rem;
    }

    h2 {
      font-size: 5.7rem;
      text-transform: capitalize;
      font-weight: 800;

      @media (max-width: 456px) {
        font-size: 4rem;
      }
    }
    
    p {
      font-size: 1.6rem;
      font-weight: 600;
      color: rgba(0,0,0, 0.7);
      margin: 3rem 0rem;

      @media (max-width: 456px) {
        font-size: 1.4rem;
      }
    }
  }

  .imgContainerHero {
    width: 100%;

    .imgHero {
      width: 100%;
      /* height: 300px; */
    }
    
  }
`;