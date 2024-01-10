import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherAPIResponse";
import { api } from "./api";
import { getWeatherByCityService } from "./getWeatherByCityService";

describe("Service: getWeatherByCityService", () => {
	it("should return weather data api formatted", async () => {
		jest.spyOn(api, "get").mockResolvedValue({ data: mockWeatherAPIResponse });

		const resposta = await getWeatherByCityService({ latitude: 123, longitude: 456 });
    expect(resposta).toHaveProperty("today")
	});
});
