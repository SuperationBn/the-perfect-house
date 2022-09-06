import React from 'react'
import { SectionInformacion } from './InfoCard.styled'
import { FcBullish, FcCustomerSupport, FcBinoculars } from "react-icons/fc";
import { Link } from 'gatsby';

export default function InfoCard() {
  return (
    <SectionInformacion>
      <article className="gridInformacion">
        <div className='cardInfo'>
          <FcBullish />
          <h3>best topics, without interest</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eveniet vel perspiciatis fuga ipsam commodi deleniti ipsa quis? Porro sint cum vel, nam asperiores fugit voluptatem repellendus sequi libero ipsam.</p>
          <Link to="#">see more</Link>
        </div>
        <div className='cardInfo'>
          <FcCustomerSupport />
          <h3>24/7 attention</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eveniet vel perspiciatis fuga ipsam commodi deleniti ipsa quis? Porro sint cum vel, nam asperiores fugit voluptatem repellendus sequi libero ipsam.</p>
          <Link to="#">see more</Link>

        </div>
        <div className='cardInfo'>
          <FcBinoculars />
          <h3>help you find the best for you</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eveniet vel perspiciatis fuga ipsam commodi deleniti ipsa quis? Porro sint cum vel, nam asperiores fugit voluptatem repellendus sequi libero ipsam.</p>
          <Link to="#">see more</Link>

        </div>
      </article>
    </SectionInformacion>
  )
}
