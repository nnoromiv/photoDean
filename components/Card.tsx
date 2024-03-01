"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./CardUi";
import { CardProps } from "../types";

const Card:React.FC<CardProps> = ({ tag, image, children, price, bodyStyle }) => {
  return (
    <CardContainer className="inter-var -mt-10">
      <CardBody className={`bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border ${bodyStyle}`}>
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {tag}
        </CardItem>
        
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={image}
            height={500}
            width={500}
            className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          as="ul"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {children}
        </CardItem>

        <div className="flex justify-between items-center mt-20">
          
          <CardItem
            translateZ={20}
            as="h1"
            className="px-4 py-1 rounded-xl text-2xl font-normal dark:text-white"
          >
            $ {price}
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 btn btn-wide rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Book
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

export default Card