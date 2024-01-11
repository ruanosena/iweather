import { render, screen, fireEvent } from "@testing-library/react-native";
import { SelectList } from "@components/SelectList";

describe("Component: SelectList", () => {
	it("should be returned selected city details", () => {
		const data = [
			{ id: "1", name: "Várzea da Roça", latitude: 123, longitude: 456 },
			{ id: "2", name: "Capim Grosso", latitude: 789, longitude: 987 },
		];

		const onPress = jest.fn();

		render(<SelectList data={data} onChange={() => {}} onPress={onPress} />);

		const selectedCity = screen.getByText(/capim/i);
		fireEvent.press(selectedCity);

		expect(onPress).toHaveBeenCalledWith(data[1]);
	});

	it("should not show up options when props data is empty", () => {
		render(<SelectList data={[]} onChange={() => {}} onPress={() => {}} />);

		const options = screen.getByTestId("options");
		expect(options.children).toHaveLength(0);
	});
});
