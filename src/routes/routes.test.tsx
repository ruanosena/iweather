import { act, render, screen, waitFor } from "@__tests__/utils/customRender";
import { Routes } from ".";
import { saveStorageCity } from "@libs/asyncStorage/cityStorage";
import { api } from "@services/api";
import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherAPIResponse";

describe("Routes", () => {
	it("should render Search screen when city is not selected", async () => {
		render(<Routes />);
		const titulo = await waitFor(() => screen.findByText(/^escolha um local/i));

		expect(titulo).toBeTruthy();
	});

	it("should render Dashboard screen when city is selected", async () => {
		jest.spyOn(api, "get").mockResolvedValue({ data: mockWeatherAPIResponse });

		const city = {
			id: "1",
			name: "São Paulo",
			latitude: 246,
			longitude: 897,
		};

		await saveStorageCity(city);

		await act(() => waitFor(() => render(<Routes />)));

		const titulo = screen.getByText(city.name);
		expect(titulo).toBeTruthy();
	});
});
