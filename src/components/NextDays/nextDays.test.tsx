import { render, screen } from "@testing-library/react-native";

import { NextDays } from "@components/NextDays";

import clearDay from "@assets/clear_day.svg";

describe("Component: NextDays", () => {
	it("should render the day", () => {
		render(
			<NextDays
				data={[
					{ day: "18/01", min: "24ºc", max: "34ºc", icon: clearDay, weather: "Céu limpo" },
					{ day: "19/01", min: "23ºc", max: "31ºc", icon: clearDay, weather: "Nublado" },
					{ day: "20/01", min: "20ºc", max: "30ºc", icon: clearDay, weather: "Céu limpo" },
					{ day: "21/01", min: "21ºc", max: "30ºc", icon: clearDay, weather: "Chuva fraca" },
					{ day: "22/01", min: "22ºc", max: "26ºc", icon: clearDay, weather: "Céu limpo" },
				]}
			/>
		);

		expect(screen.getByText("22/01")).toBeTruthy();
	});
});
