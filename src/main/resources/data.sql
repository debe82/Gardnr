INSERT INTO city (id, name, region) VALUES (1, 'Rome', 'Lazio');
INSERT INTO city (id, name, region) VALUES (2, 'Turin', 'Piemonte');


INSERT into rat_to_be_adopted
    (id, age, breed, city, clinical_status, name, pictures, sex, spayed)
VALUES
    (1,12, 'breed1', 1, 'health: good', 'mochi', '', 'male', true);
INSERT into rat_to_be_adopted
    (id, age, breed, city, clinical_status, name, pictures, sex, spayed)
VALUES
    (2, 5, 'breed2', 2, 'health: meh', 'tita', '', 'female', 'false');