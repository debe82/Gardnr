INSERT INTO city (id, name, country)VALUES (1, 'Rome', 'Italy')ON CONFLICT DO NOTHING;
INSERT INTO city (id, name, country)VALUES (2, 'Turin', 'Italy')ON CONFLICT DO NOTHING;
INSERT INTO city (id, name, country)VALUES (3, 'Paris', 'France')ON CONFLICT DO NOTHING;
INSERT INTO city (id, name, country)VALUES (4, 'Lyin', 'France')ON CONFLICT DO NOTHING;
INSERT INTO city (id, name, country)VALUES (5, 'Berlin', 'Germany')ON CONFLICT DO NOTHING;
INSERT INTO city (id, name, country)VALUES (6, 'Bonn', 'Germany')ON CONFLICT DO NOTHING;
INSERT INTO city (id, name, country)VALUES (7, 'Madrid', 'Spain')ON CONFLICT DO NOTHING;
INSERT INTO city (id, name, country)VALUES (8, 'Barcellona', 'Spain')ON CONFLICT DO NOTHING;
INSERT INTO city (id, name, country)VALUES (9, 'Stockholm', 'Sweden')ON CONFLICT DO NOTHING;
INSERT INTO city (id, name, country)VALUES (10, 'Goteborg', 'Sweden')ON CONFLICT DO NOTHING;

INSERT into rescued_rat
    (id, age, breed, city, clinical_status, name, sex, spayed)
VALUES
    (1,12, 'Standard', 1, 'health: good', 'Squall', 'male', true) ON CONFLICT DO NOTHING;
INSERT into rescued_rat
    (id, age, breed, city, clinical_status, name, sex, spayed)
VALUES
    (2, 5, 'Rex', 2, 'health: underweight', 'Duke', 'male', true) ON CONFLICT DO NOTHING;
INSERT into rescued_rat
(id, age, breed, city, clinical_status, name, sex, spayed)
VALUES
    (3,12, 'Manx', 3, 'health: good', 'Doom Slayer', 'male', true) ON CONFLICT DO NOTHING;
INSERT into rescued_rat
(id, age, breed, city, clinical_status, name, sex, spayed)
VALUES
    (4, 5, 'Sphynx', 4, 'health: terminal', 'Link', 'male', false) ON CONFLICT DO NOTHING;
INSERT into rescued_rat
(id, age, breed, city, clinical_status, name, sex, spayed)
VALUES
    (5,12, 'Satin', 5, 'health: good', 'Prophet', 'male', false) ON CONFLICT DO NOTHING;
INSERT into rescued_rat
(id, age, breed, city, clinical_status, name, sex, spayed)
VALUES
    (6, 5, 'Dumbo', 6, 'health: pregnant', 'Zoija', 'female', false) ON CONFLICT DO NOTHING;
INSERT into rescued_rat
(id, age, breed, city, clinical_status, name, sex, spayed)
VALUES
    (7,12, 'Bristle Coat', 7, 'health: good', 'Zelda', 'female', true) ON CONFLICT DO NOTHING;
INSERT into rescued_rat
(id, age, breed, city, clinical_status, name, sex, spayed)
VALUES
    (8, 5, 'Topaz', 8, 'health: good', 'Lara', 'female', true) ON CONFLICT DO NOTHING;
INSERT into rescued_rat
(id, age, breed, city, clinical_status, name, sex, spayed)
VALUES
    (9,12, 'Lilac Agouti', 9, 'health: catatonic', 'Ellie', 'female', true) ON CONFLICT DO NOTHING;
INSERT into rescued_rat
(id, age, breed, city, clinical_status, name, sex, spayed)
VALUES
    (10, 5, 'Cinnamon Pearl', 10, 'health: good', 'Ripley', 'female', true) ON CONFLICT DO NOTHING;
INSERT into rescued_rat
(id, age, breed, city, clinical_status, name, sex, spayed)
VALUES
    (11,12, 'Silver Fawn', 1, 'health: pregnant', 'Sarah', 'female', false) ON CONFLICT DO NOTHING;
INSERT into rescued_rat
(id, age, breed, city, clinical_status, name, sex, spayed)
VALUES
    (12, 5, 'Powder Blue', 2, 'health: meh', 'Shodan', 'female', false) ON CONFLICT DO NOTHING;
INSERT into rescued_rat
(id, age, breed, city, clinical_status, name, sex, spayed)
VALUES
    (13,12, 'Quicksilver', 3, 'health: good', 'Big Sister', 'female', true) ON CONFLICT DO NOTHING;
