export interface SliderControlsProps {
  onNext: () => void;
  onPrev: () => void;
  currentIndex: number;
  total: number;
  goTo: (index: number) => void;
}
