export default async function handler(req, res) {
	// const { cityInput } = req.body;
	const { latitude } = "45.5663";
	const { longitude } = "5.9208";
	const getWeatherData = await fetch(
		`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&timezone=auto&models=meteofrance_seamless`
	);
	const data = await getWeatherData.json();
	res.status(200).json(data);
	console.log(data);
}
