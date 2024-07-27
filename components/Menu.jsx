import React from 'react'

import Image from "next/image";
import LogoImg from "@/public/logo.png";
import Link from "next/link";
export default function Menu() {
    const navItems = [
        {
          itemName: "Offerings",
          link: 'our-offerings'
        },
        {
          itemName: "Solutions",
          link: 'our-offerings'
        },
        {
          itemName: "Partners",
          link: 'our-offerings'
        },
        {
          itemName: "Insights",
          link: 'our-offerings'
        },
        {
          itemName: "Career",
          link: 'our-offerings'
        },
      ];
  return (
    <div className="sf-content sf-header flex justify-between items-center">
    <Link href='/'>
    <Image src={LogoImg} width={200} height={100} alt="logoImg" />
    </Link>

    <nav>
    <ul className="flex gap-4 font-normal">
        {navItems.map((item) => (
        <li key={item.itemName} className="text-gray-400 px-2">
            <Link href={item.link}>
            {item.itemName}
            </Link>
        </li>
        ))}
    </ul>
    </nav>

    <button className="border border-gray-400 rounded-lg px-4 py-2 text-sm uppercase text-gray-400">
    Contact Sales
    </button>
</div>
  )
}
