export interface CardCarousel {
    img: string;
    title: string;
    description: string;
    price: string;
    rating: string;
  }
  
export interface CardCarouselProps {
    cards: CardCarousel[];
}

export interface Card {
    img: string;
    title: string;
    location: string;
    price: string;
}