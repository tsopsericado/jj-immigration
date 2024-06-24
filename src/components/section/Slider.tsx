import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import MainCard from '../molecules/mainCard'



export default function Slider() {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem> <MainCard /> </CarouselItem>
        <CarouselItem><MainCard /></CarouselItem>
        <CarouselItem><MainCard /></CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

  )
}
