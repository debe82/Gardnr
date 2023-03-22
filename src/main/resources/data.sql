-- INSERT INTO city (id, name,)VALUES (1, 'Rome', 'Italy')ON CONFLICT DO NOTHING;
-- INSERT INTO city (id, name, country)VALUES (2, 'Turin', 'Italy')ON CONFLICT DO NOTHING;
-- INSERT INTO city (id, name, country)VALUES (3, 'Paris', 'France')ON CONFLICT DO NOTHING;
-- INSERT INTO city (id, name, country)VALUES (4, 'Lyin', 'France')ON CONFLICT DO NOTHING;
-- INSERT INTO city (id, name, country)VALUES (5, 'Berlin', 'Germany')ON CONFLICT DO NOTHING;
-- INSERT INTO city (id, name, country)VALUES (6, 'Bonn', 'Germany')ON CONFLICT DO NOTHING;
-- INSERT INTO city (id, name, country)VALUES (7, 'Madrid', 'Spain')ON CONFLICT DO NOTHING;
-- INSERT INTO city (id, name, country)VALUES (8, 'Barcellona', 'Spain')ON CONFLICT DO NOTHING;
-- INSERT INTO city (id, name, country)VALUES (9, 'Stockholm', 'Sweden')ON CONFLICT DO NOTHING;
-- INSERT INTO city (id, name, country)VALUES (10, 'Goteborg', 'Sweden')ON CONFLICT DO NOTHING;

INSERT into rescued_rat
(age, breed, city, clinical_status, name, sex, spayed)
VALUES
    (12, 'Quicksilver', 'Pisa', 'health: good', 'Squall', 'male', true) ON CONFLICT DO NOTHING;
INSERT into rescued_rat
    (age, breed, city, clinical_status, name, sex, spayed)
VALUES
    (5, 'Rex', 'Rome', 'health: underweight', 'Duke', 'male', true) ON CONFLICT DO NOTHING;

INSERT into rescued_rat
(age, breed, city, clinical_status, name, sex, spayed)
VALUES
    (12, 'Manx', 'Milan', 'health: good', 'Doom Slayer', 'male', true) ON CONFLICT DO NOTHING;
INSERT into rescued_rat
(age, breed, city, clinical_status, name, sex, spayed)
VALUES
    (5, 'Sphynx', 'Stockholm', 'health: terminal', 'Link', 'male', false) ON CONFLICT DO NOTHING;
INSERT into rescued_rat
(age, breed, city, clinical_status, name, sex, spayed)
VALUES
    (12, 'Satin', 'Lisbon', 'health: good', 'Prophet', 'male', false) ON CONFLICT DO NOTHING;
INSERT into rescued_rat
(age, breed, city, clinical_status, name, sex, spayed)
VALUES
    (5, 'Dumbo', 'Rome', 'health: pregnant', 'Zoija', 'female', false) ON CONFLICT DO NOTHING;
INSERT into rescued_rat
(age, breed, city, clinical_status, name, sex, spayed)
VALUES
    (12, 'Bristle Coat', 'Stockholm', 'health: good', 'Zelda', 'female', true) ON CONFLICT DO NOTHING;
INSERT into rescued_rat
(age, breed, city, clinical_status, name, sex, spayed)
VALUES
    (5, 'Topaz', 'Rome', 'health: good', 'Lara', 'female', true) ON CONFLICT DO NOTHING;
INSERT into rescued_rat
(age, breed, city, clinical_status, name, sex, spayed)
VALUES
    (12, 'Lilac Agouti', 'Berlin', 'health: catatonic', 'Ellie', 'female', true) ON CONFLICT DO NOTHING;
INSERT into rescued_rat
(age, breed, city, clinical_status, name, sex, spayed)
VALUES
    (5, 'Cinnamon Pearl', 'Berlin', 'health: good', 'Ripley', 'female', true) ON CONFLICT DO NOTHING;
INSERT into rescued_rat
(age, breed, city, clinical_status, name, sex, spayed)
VALUES
    (12, 'Silver Fawn', 'Madrid', 'health: pregnant', 'Sarah', 'female', false) ON CONFLICT DO NOTHING;
INSERT into rescued_rat
(age, breed, city, clinical_status, name, sex, spayed)
VALUES
    (5, 'Powder Blue', 'Turin', 'health: meh', 'Shodan', 'female', false) ON CONFLICT DO NOTHING;
INSERT into rescued_rat
(age, breed, city, clinical_status, name, sex, spayed)
VALUES
    (12, 'Quicksilver', 'Pisa', 'health: good', 'Big Sister', 'female', true) ON CONFLICT DO NOTHING;
