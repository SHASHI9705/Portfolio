declare module "react-slick" {
  import { Component, ReactNode } from "react";

  export interface Settings {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    centerMode?: boolean;
    centerPadding?: string;
    focusOnSelect?: boolean;
    responsive?: Array<{
      breakpoint: number;
      settings: Partial<Settings>;
    }>;
    children?: ReactNode; // Added children property
  }

  export default class Slider extends Component<Settings> {}
}