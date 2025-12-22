import { useState } from "react";

export function useAccountsControler() {
	const [sliderState, setSliderState] = useState({
		isBeginning: true,
		isEnd: false,
	});

  return {
    sliderState,
		setSliderState,
  }
}
