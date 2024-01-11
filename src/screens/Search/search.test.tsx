import { mockCityAPIResponse } from "@__tests__/mocks/api/mockCityAPIResponse";
import { render, screen, fireEvent, waitFor } from "@__tests__/utils/customRender";
import { Search } from "@screens/Search";
import { api } from "@services/api";

describe("Screen: Search", () => {
	it("should show up option of city", async () => {
		jest.spyOn(api, "get").mockResolvedValue({ data: mockCityAPIResponse });
		render(<Search />);

		const searchInput = screen.getByTestId("search-input");
		fireEvent.changeText(searchInput, "Salvador");

		const opcao = await waitFor(() => screen.findByText(/salvador/i));
		expect(opcao).toBeTruthy();
	});
});
