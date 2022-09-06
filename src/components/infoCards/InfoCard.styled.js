const { default: styled } = require("styled-components");

export const SectionInformacion = styled.section`
  width: 100%;
  padding-bottom: 6rem;

  .gridInformacion {
    max-width: 1220px;
    margin: 0 auto;
    padding: 1rem;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;

    @media (max-width: 371px) {
      grid-template-columns: 1fr;
    }

    .cardInfo {
      text-align: center;
      padding: 3rem 1rem;
      border: 1px solid rgb(0,0,0, 0.1);
      box-shadow: 0px 3px 6px rgb(0,0,0, 0.1);
      border-radius: 7px;
      
      &:hover {
        box-shadow: 0px 5px 9px rgb(0,0,0, 0.2);
      }

      svg {
        font-size: 7rem;
      }

      h3 {
        font-size: 2.3rem;
        font-weight: 800;
        margin-top: 2rem;
      }

      p {
        font-size: 1.4rem;
        margin-top: 2rem;
        margin-bottom: 4rem;
      }

      a {
        font-size: 1.7rem;
        font-weight: 600;
        position: relative;
        color: #228c69;
        
        &::after {
          position: absolute;
          top: 1px;
          right: -15px;
          content: '<';
          transition: all 0.2s ease-in;
          
        }
        &:hover::after {
          right: 75px;
          top: 3px;
          transform: rotate(180deg);
          color: #2ac2e0;
        }
      }
    }
  }
`;