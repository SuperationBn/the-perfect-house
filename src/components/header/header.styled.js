import styled from "styled-components"
// const HeaderSection = sty

export const SectionHeader = styled.header`
padding: 1.2rem 0rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: rgb(253, 253, 253, 0.8);
  box-shadow: 0px 3px 6px rgb(0, 0, 0, 0.1);
  z-index: 1000;

  @media (max-width: 610px) {
    position: relative;
    /* grid-template-columns: 1fr; */
  }

  @media (max-width: 280px) {
    padding: 1.2rem 1rem;
  }

  .logo {
    padding-left: 9rem;
    
    @media (max-width: 391px) {      
      padding-left: 2rem;
    }
    
    @media (max-width: 280px) {
      padding-left: 0rem;
    }

    h1 {
      font-size: 3rem;
      text-transform: uppercase;
    }
  }

  .navbar {
    place-self: center;
    display: flex;
    align-items: center;
    gap: 4rem;

     @media (max-width: 610px) {
      position: absolute;
      top: -800%;
      left: 10px;
      right: 10px;
      padding: 10rem 0rem;
      flex-direction: column;
      background-color: rgba(0,0,0, 59%);
      backdrop-filter: blur(2px);
      box-shadow: 0px 4px 10px rgba(0,0,0, 39%);
      border-bottom-right-radius: 20px;
      border-bottom-left-radius: 20px;
      
    }

    &.activeNav {
      top: 100%;
    }

    .iconsLinksHeader {
      position: relative;
      top: 1.5px;
    }
    
    a {
      position: relative;
      padding: 1.1rem 0rem;
      font-size: 1.6rem;
      font-weight: 800;
      overflow: hidden;
      color: rgba(42, 44, 45, 0.603);

      .efectHover {
        width: 60px;
        height: 2px;
        background-color: #77cefa;
        position: absolute;
        left: -62px;
        bottom: 5px;


        @media (max-width: 610px) {
          width: 300px;
          left: -302px;
        }
      }

      &:hover .efectHover {
        left: 0px;
      }
      
      @media (max-width: 610px) {
        font-size: 4rem;
        font-weight: 600;

        color: #f2f4f5;
        text-transform: uppercase;

        &:hover {
          color: #77cefa;
        }
      }
    }
  }

  .iconsNav {

    place-self: center;

    @media (min-width: 610px) {
      display: none;
    }

    @media (max-width: 280px) {
      place-self: end;
      align-self: center;
    }

    svg {
      font-size: 2.5rem;
      cursor: pointer;
      margin-left: 6rem;
    }
  }
`;