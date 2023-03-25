--INSERT into user_plant (id, name) VALUES (1, 'name') ON CONFLICT DO NOTHING;
--INSERT into plants (plant_id, plant_name, plant_name_latin) VALUES (1, 'plantName', 'plantNameLatin') ON CONFLICT DO NOTHING;
/*INSERT into user_plants (plant_id, plant_name, plant_name_latin, watering, temp_max, temp_min, ideal_light, description, start_date)
VALUES (1, 'plantName1', 'plantNameLatin1', 'every day1', '30', '10', 'xxx lumen', 'a very nice plant', to_date('22/02/22', 'DD/MM/YY')) ON CONFLICT DO NOTHING;
INSERT into user_plants (plant_id, plant_name, plant_name_latin, watering, temp_max, temp_min, ideal_light, description, start_date)
VALUES (2, 'plantName2', 'plantNameLatin2', 'every day2', '30', '10', 'xxx lumen', 'a very nice plant', to_date('22/02/22', 'DD/MM/YY')) ON CONFLICT DO NOTHING;
INSERT into user_plants (plant_id, plant_name, plant_name_latin, watering, temp_max, temp_min, ideal_light, description, start_date)
VALUES (3, 'plantName3', 'plantNameLatin3', 'every day3', '30', '10', 'xxx lumen', 'a very nice plant', to_date('22/02/22', 'DD/MM/YY')) ON CONFLICT DO NOTHING;
INSERT into user_plants (plant_id, plant_name, plant_name_latin, watering, temp_max, temp_min, ideal_light, description, start_date)
VALUES (4, 'plantName4', 'plantNameLatin4', 'every day4', '30', '10', 'xxx lumen', 'a very nice plant', to_date('22/02/22', 'DD/MM/YY')) ON CONFLICT DO NOTHING;
INSERT into user_plants (plant_id, plant_name, plant_name_latin, watering, temp_max, temp_min, ideal_light, description, start_date)
VALUES (5, 'plantName5', 'plantNameLatin5', 'every day5', '30', '10', 'xxx lumen', 'a very nice plant', to_date('22/02/22', 'DD/MM/YY')) ON CONFLICT DO NOTHING;*/

INSERT into plants (plant_id, plant_name, plant_name_latin, watering, temp_max, temp_min, ideal_light, description)
VALUES (1, 'plantName1', 'plantNameLatin1', 'every day1', '30', '10', 'xxx lumen', 'a very nice plant') ON CONFLICT DO NOTHING;
INSERT into plants (plant_id, plant_name, plant_name_latin, watering, temp_max, temp_min, ideal_light, description)
VALUES (2, 'plantName2', 'plantNameLatin2', 'every day2', '30', '10', 'xxx lumen', 'a very nice plant') ON CONFLICT DO NOTHING;
