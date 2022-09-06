const { default: styled } = require("styled-components");

export const SerctionServices = styled.section`
  width: 100%;
  padding-top: 6rem;
  padding-bottom: 10rem;

  .gridServices {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;

    @media (min-width: 810px) {
      grid-template-columns: 1fr 1fr;
      
    }

    .imgServicesContent {
      place-self: center;
      width: 100%;

      .imgServices {
        max-width: 100%;
      }
    }

    .textServicesContent {
      place-self: center;
      width: 100%;
      height: 100%;
      h2 {
        font-size: 5rem;
        font-weight: 800;

        @media (max-width: 962px) {
          font-size: 4rem;
        }

        @media (max-width: 810px) {
          font-size: 5rem;
        }

        @media (max-width: 565px) {
          font-size: 4rem;
        }
        
        @media (max-width: 387px) {
          font-size: 3.3rem;
        }
      }

      p {
        font-size: 1.6rem;
        line-height: 1.8;
        margin: 4rem 0rem;
        
        @media (max-width: 962px) {
          margin: 3rem 0rem;

        }
      }

      .servicesInfo {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2rem;
        margin-bottom: 5rem;
        
        @media (min-width: 410px) {
          grid-template-columns: 1fr 1fr;
        }
        
        @media (max-width: 962px) {
          margin-bottom: 4rem;
        }

        h4 {
          font-size: 1.9rem;
          font-weight: 400;
        }
      }

      a {
        cursor: pointer;
        padding: 1rem 4rem;
        font-size: 1.7rem;
        font-weight: 600;

        background-color: #5eb497;
        color: rgb(253, 253, 253);
        border-radius: 4px;
        box-shadow: 0px 3px 6px rgb(0, 0, 0, 0.2);

        &:hover {
          background-color: #5fc5a3;
        }
      }
    }
  }
`;