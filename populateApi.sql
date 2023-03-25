INSERT into api_plants 
(plant_id, plant_name, plant_name_latin, watering, temp_max, temp_min, ideal_light, description, start_date)
VALUES 
(1, 'Lipstick', 'Aeschynanthus lobianus', 'every day1', '32', '14', 'Bright light', 
	'Aeschynanthus Radicans, more commonly known as lipstick plant, is a popular and striking evergreen tropical houseplant.
	It gets its name from the vibrant red and tubular flowers that appear above a burgundy bud. These flowers grow in clusters and, along 
 	with the waxy, glossy, green foliage, have a cascading, vine-like habit. This makes them an ideal choice for use in hanging baskets or tall 
 	containers.
	As an epiphytic species, these plants are native to the tropical regions of Southeast Asia. Here you will find them growing on tree branches 
 	and in crevices in rocks.
	Provided they get adequate heat, humidity, and filtered sunlight, you can enjoy abundant blooms for much of the year. In general, however, 
 	lipstick plants flower most profusely in summer and autumn.', to_date('22/02/22', 'DD/MM/YY')) 
ON CONFLICT DO NOTHING;


INSERT into api_plants 
(plant_id, plant_name, plant_name_latin, watering, temp_max, temp_min, ideal_light, description, start_date)
VALUES 
(2, 'plantName2', 'plantNameLatin2', 'every day2', '30', '10', 'xxx lumen', 'a very nice plant', to_date('22/02/22', 'DD/MM/YY')) ON CONFLICT DO NOTHING;
INSERT into api_plants (plant_id, plant_name, plant_name_latin, watering, temp_max, temp_min, ideal_light, description, start_date)
VALUES 
(3, 'plantName3', 'plantNameLatin3', 'every day3', '30', '10', 'xxx lumen', 'a very nice plant', to_date('22/02/22', 'DD/MM/YY')) ON CONFLICT DO NOTHING;
INSERT into api_plants (plant_id, plant_name, plant_name_latin, watering, temp_max, temp_min, ideal_light, description, start_date)
VALUES 
(4, 'plantName4', 'plantNameLatin4', 'every day4', '30', '10', 'xxx lumen', 'a very nice plant', to_date('22/02/22', 'DD/MM/YY')) ON CONFLICT DO NOTHING;
INSERT into api_plants (plant_id, plant_name, plant_name_latin, watering, temp_max, temp_min, ideal_light, description, start_date)
VALUES 
(5, 'plantName5', 'plantNameLatin5', 'every day5', '30', '10', 'xxx lumen', 'a very nice plant', to_date('22/02/22', 'DD/MM/YY')) ON CONFLICT DO NOTHING;
