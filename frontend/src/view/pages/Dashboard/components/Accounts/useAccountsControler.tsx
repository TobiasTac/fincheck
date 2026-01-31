import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useWindowWidth } from "../../../../../app/hooks/useWindowWidth";
import { bankAccountsService } from "../../../../../app/services/bankAccountsService";
import { useDashboard } from "../DashboardContext/useDashboard";

export function useAccountsControler() {
	const windowWidth = useWindowWidth();
  const {
    areValuesVisible,
    toogleValuesVisibility,
    openNewAccountModal,
  } = useDashboard();

  const [sliderState, setSliderState] = useState({
		isBeginning: true,
		isEnd: false,
	});

  const { data = [], isFetching  } = useQuery({
    queryKey: ['bankAccounts'],
    queryFn: bankAccountsService.getAll
  })

  return {
    sliderState,
		setSliderState,
    windowWidth,
    areValuesVisible,
    toogleValuesVisibility,
    isLoading: isFetching,
    accounts: data,
    openNewAccountModal,
  }
}
