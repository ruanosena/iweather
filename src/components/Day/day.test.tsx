import { render, screen } from "@testing-library/react-native";
import { Day } from "@components/Day";

import clearDay from "@assets/clear_day.svg";

describe("Component: Day", () => {
	it("should be rendered", () => {
		render(
			<Day
				data={{
					day: "18/01",
					min: "24ºc",
					max: "34ºc",
					icon: clearDay,
					weather: "Céu limpo",
				}}
			/>
		);

		expect(screen.getByText("18/01")).toBeTruthy();
	});
});
