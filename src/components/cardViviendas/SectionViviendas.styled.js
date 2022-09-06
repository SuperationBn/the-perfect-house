import styled from "styled-components";

export const SectionViviendasGrid = styled.section`
  width: 100%;
  padding: 3rem 1rem 8rem 1rem;

  .gridCardViviendas {
    max-width: 1200px;
    margin: 0 auto;

    display: grid;
    gap: 3rem;

    @media (min-width: 678px) {
      grid-template-columns: 1fr 1fr;
    }

    .cardContainer {
      border: 0.8px solid rgb(0,0,0,0.1);
      box-shadow: 0px 3px 6px rgb(0,0,0, 0.1);
      margin-bottom: 6rem;
      
      &:hover {
        box-shadow: 0px 3px 6px rgb(0,0,0, 0.2);
      }

      .imgCardBox {
        width: 100%;
        height: 300px;

        .imgCard {
          max-width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
      }

      .textCardBox {
        padding: 3rem 1rem;
        h3 {
          font-size: 3.7rem;
          font-weight: 800;
          letter-spacing: 1.5px;
          margin-bottom: 2rem;
          color: rgb(0,0,0, 0.7);
        }
        
        p {
          letter-spacing: 1px;
          font-size: 1.6rem;
          font-weight: 600;
          color: rgb(0,0,0, 0.5);
        }
      }
    }
  }
`;