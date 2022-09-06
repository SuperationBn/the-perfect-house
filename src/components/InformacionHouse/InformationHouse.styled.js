import styled from "styled-components";

export const SectionHouseInformationStyled = styled.section`
  width: 100%;
  min-height: 100vh;
  padding-top: 6rem;
  padding-bottom: 9rem;

  .gridHouseInfo {
    position: relative;
    max-width: 1200px;
    min-height: 100%;
    margin: 0 auto;
    padding: 1rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    /* grid-template-rows: repeat(12, 1fr); */

    @media (max-width: 734px) {
      grid-template-columns: 1fr;
    }

    .goBack {
      position: absolute;
      left: 10px;
      top: -20px;
      font-size: 1.5rem;

      &::before {
        content: '<';
        position: relative;
        top: 2px;
        margin-right: 1rem;
      }

      &:hover {
        text-decoration: line-through;
      }
    }

    .imgBox {
      /* grid-column: span 2; */
      /* grid-row: span 12; */
      width: 100%;
      height: 100%;

      @media (max-width: 734px) {
        grid-column: span 1;
        display: block;
        height: 500px;
      }

      .imgInfoHouse {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .textInfoHouseBox {
      align-self: center;

      .textBox {
        h2 {
          font-size: 9rem;

          @media (max-width: 850px) {
            font-size: 6rem;
          }
        }

        h3 {
          font-size: 3.5rem;
          color: rgb(0,0,0, 0.6);

          @media (max-width: 850px) {
            font-size: 3rem;
          }
        }
        
        h4 {
          margin-top: 2rem;
          font-size: 2rem;
          color: rgb(0,0,0, 0.4);

          @media (max-width: 850px) {
            font-size: 1.8rem;
          }
        }
      }

      .caractiristicasHouse {
        margin-top: 5rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;

        @media (max-width: 850px) {
          gap: 2rem;
        }

        @media (max-width: 850px) {
          grid-template-columns: 1fr;
          gap: 4rem;
          margin-bottom: 3rem;
        }

        .moreInfo {
          span {
            font-size: 1.7rem;
            font-weight: 600;
            color: rgb(0,0,0, 0.6);

            @media (max-width: 850px) {
              font-size: 1.5rem;
            }
          }

          p {
            margin-top: 1rem;
            font-size: 3rem;
            font-weight: 600;
            color: rgb(0,0,0, 0.7);

            @media (max-width: 850px) {
              
              font-size: 2.5rem;
            }

            .IconsInfo {
              position: relative;
              top: 0px;
              font-size: 1.8rem;
            }
          }
        }
      }
    }

    .textMore {
      width: 100%;
      font-size: 1.6rem;
      line-height: 1.6;

      h2 {
        margin-top: 2rem;
        margin-bottom: 1rem;
        font-size: 3rem;
      }
    }

  }
`;