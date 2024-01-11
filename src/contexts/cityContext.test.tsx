import { act, renderHook, waitFor } from "@testing-library/react-native";
import { useCity } from "@hooks/useCity";
import { CityProvider } from "@contexts/CityContext";

describe("Context: CityContext", () => {
	it("should be changed the selected city", async () => {
		const { result } = renderHook(() => useCity(), { wrapper: CityProvider });

		await waitFor(() =>
			act(() =>
				result.current.handleChanceCity({
					id: "1",
					name: "Salvador",
					latitude: 123,
					longitude: 246,
				})
			)
		);

		expect(result.current.city?.name).toBe("Salvador");
	});
});
