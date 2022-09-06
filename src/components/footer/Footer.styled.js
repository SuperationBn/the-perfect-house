import styled from "styled-components";

export const SectionFooter = styled.footer`
  width: 100%;
  background-color: rgb(1, 33, 82);

  .gridFooter {
    max-width: 1200px;
    margin: 0 auto;
    width: 97%;
    padding: 1rem;

    .info {
      width: 100%;

      .gridInfoFooter {
        margin-top: 1rem;
        margin-bottom: 3rem;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        
        @media (max-width: 942px) {
          grid-template-columns: 1fr 1fr;
        }
        
        @media (max-width: 698px) {
          grid-template-columns: 1fr;
        }

        .logoInfoP {
          grid-column: span 2;
          width: auto;
          
          @media (max-width: 942px) {
            grid-column: span 1;
          }

          @media (max-width: 698px) {
            text-align: center;
          }

          h2 {
            font-size: 4rem;
            color: rgb(255, 255 ,255, 0.9);
          }
          
          p {
            font-size: 1.4rem;
            color: rgb(255, 255 ,255, 0.7);
          }
        }

        .gridEnlacesContacttos {
          display: grid;
          grid-template-columns: 1fr 1fr;
          place-items: center;
          place-content: center;
          align-items: center;

          @media (max-width: 698px) {
            margin-top: 3rem;
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          
          .iconsLins {
            svg {
              font-size: 2rem;
              color: rgb(255, 255 ,255, 0.7);
              cursor: pointer;
              
              @media (max-width: 698px) {
                font-size: 3rem;
              }
              
              &:hover {
                color: rgb(103, 204, 255);
              }

              &:not(:last-child) {
                margin-right: 2rem;
              }
            }
          }
        }

        .formFooter {
          form {
              @media (max-width: 698px) {
                text-align: center;
              }

            label{
              font-size: 1.3rem;
              color: rgb(255, 255 ,255, 0.7);
              /* padding-bottom: 1rem; */
            }
            .flexFormulario {
              margin-top: 0.5rem;
              display: flex;
              gap: 0.5rem;

              input {
                padding: 1rem 0.3rem;
                background-color: rgb(0,0,0, 0.3);
                color: rgb(255, 255 ,255, 0.8);
                
              }

              button {
                font-size: 3rem;
                padding: 0rem 0.2rem;
                cursor: pointer;
                
              }
            }
          }
        }
      }
    }

    .linksFooter {
      display: flex;
      gap: 15rem;

        @media (max-width: 698px) {
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 3rem;
        }

      .sublinks {
        display: flex;
        flex-direction: column;

        h3 {
          font-size: 1.5rem;
          text-transform: uppercase;
          font-weight: 800;
          color: rgb(231, 26, 198);
        }

        a {
          font-size: 1.4rem;
          color: rgb(255, 255 ,255, 0.6);
          margin-top: 1rem;
          
          &:hover {
            color: rgb(255, 255 ,255, 0.9);
          }
          
        }
      }
    }

    .derechos {
      margin-top: 8rem;
      width: 100%;

      .gridDerech {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        place-items: center;

        @media (max-width: 698px) {
           grid-template-columns: 1fr;
           gap: 3rem;
        }

        span {
          font-size: 1.2rem;
          color: rgb(255, 255 ,255, 0.4);
        }
        
        div {
          a {
            font-size: 1.2rem;
            color: rgb(255, 255 ,255, 0.6);
            
            &:hover {
              
              color: rgb(255, 255 ,255, 0.9);
            }

            &:not(:last-child) {
              margin-right: 1rem;
            }
          }
        }
      }
    }
  }
`;