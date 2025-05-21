export interface SliderDotsProps {
  currentIndex: number;
  total: number;
  goTo: (index: number) => void;
}
