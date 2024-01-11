import { render, screen } from "@testing-library/react-native";
import { WeatherItem } from "@components/WeatherItem";

import dropIcon from "@assets/drop.svg";

describe("Component: WeatherItem", () => {
	it("should show up title and value", () => {
		render(<WeatherItem icon={dropIcon} title="Umidade do ar" value="81%" />);
    
		const titulo = screen.getByText("Umidade do ar");
		const valor = screen.getByText("81%");

		expect(titulo).toBeTruthy();
		expect(valor).toBeTruthy();
	});
});
