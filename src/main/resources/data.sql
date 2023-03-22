INSERT into plants (plant_name, plant_latin_name, instructions, description, start_date)
VALUES
    ('basil', 'basilium', '{water, light, Tmin, Tmax}', 'good plant', TO_DATE('17/12/2015', 'DD/MM/YYYY')) ON CONFLICT DO NOTHING;