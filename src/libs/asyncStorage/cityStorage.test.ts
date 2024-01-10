import { getStorageCity, removeStorageCity, saveStorageCity } from "@libs/asyncStorage/cityStorage";
import { CityProps } from "@services/getCityByNameService";

const newCity: CityProps = { id: "1", name: "São Paulo", latitude: 123, longitude: 456 };

describe("Storage: CityStorage", () => {
	it("should be returned null when it doesn't have a city storaged", async () => {
		const resposta = await getStorageCity();
		expect(resposta).toBeNull();
	});

	it("should be returned storaged city", async () => {
		await saveStorageCity(newCity);
		const resposta = await getStorageCity();

		expect(resposta).toEqual(newCity);
	});

	it("should be removed storaged city", async () => {
		await saveStorageCity(newCity);
		await removeStorageCity();

		const resposta = await getStorageCity();
		expect(resposta).toBeNull();
	});
});
