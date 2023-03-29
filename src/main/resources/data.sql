INSERT into plants
(plant_id, plant_name, plant_name_latin, watering, temp_max, temp_min, ideal_light, description)
VALUES
    (1, 'Lipstick', 'Aeschynanthus lobianus', 'every day1', '32', '14', 'Bright light',
     'Aeschynanthus Radicans, more commonly known as lipstick plant, is a popular and striking evergreen tropical houseplant.
     It gets its name from the vibrant red and tubular flowers that appear above a burgundy bud. These flowers grow in clusters and, along
      with the waxy, glossy, green foliage, have a cascading, vine-like habit. This makes them an ideal choice for use in hanging baskets or tall
      containers.
     As an epiphytic species, these plants are native to the tropical regions of Southeast Asia. Here you will find them growing on tree branches
      and in crevices in rocks.
     Provided they get adequate heat, humidity, and filtered sunlight, you can enjoy abundant blooms for much of the year. In general, however,
      lipstick plants flower most profusely in summer and autumn.')
    ON CONFLICT DO NOTHING;


INSERT into plants
(plant_id, plant_name, plant_name_latin, watering, temp_max, temp_min, ideal_light, description)
VALUES
    (2, 'Maindenhair', 'Adiantum raddianum', 'every day', '30', '12', 'Bright light',
     'Maidenhair ferns have delicate fan-shaped leaf segments, typically clustered on wiry black stems, and their leaves are smaller than other types of
      ferns. In addition to being one of the most popular fern houseplants, the maidenhair fern can also be found in nature, growing in places where other
      plants typically dont, like on rock walls and in between rock fissures where the moisture from water seepage keeps them alive. Though they are
      visually stunning throughout all stages of their growth, they are considered a slow-growing fern, typically taking up to three years to reach their
      full mature size. Plant the fern outdoors any time during the year if you live in the right USDA zone where theyll thrive.') ON CONFLICT DO NOTHING;

INSERT into plants (plant_id, plant_name, plant_name_latin, watering, temp_max, temp_min, ideal_light, description)
VALUES
    (3, 'Silver vase', 'Aechmea fatsiata', 'every day', '30', '12', 'Bright light',
     'Aechmea fasciata requires partial shade and a well-drained, but moisture-retentive soil. It can also be grown epiphytically, as, for example, with
     moss around its roots and wired to rough bark. Root rot can be a problem if the soil is too moist.[3] If potted, the soil should contain ample acidic
     organic matter. The rosette formed by the leaves should be kept filled with water. Propagation is from side shoots that naturally develop around the
     base of the main rosette') ON CONFLICT DO NOTHING;

INSERT into plants (plant_id, plant_name, plant_name_latin, watering, temp_max, temp_min, ideal_light, description)
VALUES
    (4, 'ariegated Carabbean Agave', 'Agave angustilolia Marginata', 'every week', '35', '5', '6 or more hours of direct sunlight per day',
     'Agave angustifolia Marginata is a succulent plant that forms dense rosettes atop a short trunk usually hidden until the plant gets some age. The
     rosettes grow up to 4 feet (1.2 m) in diameter. Leaves are fairly stiff, up to 2 feet (60 cm) long, narrow and concave towards the middle with a
     broad central band colored pale green and strong creamy-white margins that often have a flush of pink. When in flower, which does not occur until the
     rosette is at least 10 years old and often much later, it sends an up to 10 feet long spike with a well-branched panicle bearing greenish-white
     flowers.') ON CONFLICT DO NOTHING;

INSERT into plants (plant_id, plant_name, plant_name_latin, watering, temp_max, temp_min, ideal_light, description)
VALUES
    (5, 'Coral berry', 'Aechmea ramosa', 'every day', '30', '10', 'Bright light',
     'This attractive plant has broad pale green arching leaves and a long flower spikes which tend to arch due to weight of the flower head. The terminal
     inflorescences are branched with red bracts and yellow flowers. The strap-like leaves are leathery and have sharp spines along the leaf margin. They
     are very sharp so take care when handling them, gloves are recommended.') ON CONFLICT DO NOTHING;

INSERT into plants (plant_id, plant_name, plant_name_latin, watering, temp_max, temp_min, ideal_light, description)
VALUES
    (6, 'Thread Agave', 'Agave filifera', 'every day5', '35', '5', '6 or more hours of direct sunlight per day.',
     'Agave filifera is a succulent indigenous to the unforgiving landscape of Central Mexico. It is commonly known as Thread agave due to the thin,
         filament-like threads adorning the leaves. These ornamental threads serve to distinguish this species from countless others, earning it the valued
         Royal Horticultural Society’s Award of Garden Merit.') ON CONFLICT DO NOTHING;

INSERT into plants (plant_id, plant_name, plant_name_latin, watering, temp_max, temp_min, ideal_light, description)
VALUES
    (7, 'Rosy Maidenhair', 'Adiantum hispidulum', 'every day', '30', '12', 'Bright light',
     'Adiantum hispidulum grows in tufts or clumps among rocks or from the ground, its fronds arising from the short dark clumped rhizomes. The dark
     stipe measures up to 45 cm (18 in) in length. The fronds are divided into long and short narrow triangular or elliptic pinnae, each of which is
     divided again into smaller roughly rectangular, diamond-, or fan-shaped pinnules. Each pinnule may have 1 to 20 sori along its margins underneath.
     Young growth may have a pinkish tinge before it matures into the dark green foliage.') ON CONFLICT DO NOTHING;

INSERT into plants (plant_id, plant_name, plant_name_latin, watering, temp_max, temp_min, ideal_light, description)
VALUES
    (8, 'Dragon tree Agave', 'Agave attenuata', 'every day', '35', '5', '6 or more hours of direct sunlight per day',
     'Agave attenuata is a species of flowering plant in the family Asparagaceae, commonly known as the foxtail or lions tail. The name swans neck agave
     refers to its development of a curved inflorescence, unusual among agaves. Native to the plateaux of central west Mexico, as one of the unarmed agaves,
     it is popular as an ornamental plant in gardens in many other places with subtropical and warm climates') ON CONFLICT DO NOTHING;

INSERT into plants (plant_id, plant_name, plant_name_latin, watering, temp_max, temp_min, ideal_light, description)
VALUES
    (9, 'Chinese Evergreen', 'Aglaonema', 'every day', '28', '18', 'Bright light',
     'Aglaonemas are evergreen or perennials, with stems growing erect, or decumbent and creeping; stems that grow along the ground may actively root at
     the nodes, similar to other aroids. There is generally a crown of wide leaf-blades which, in both wild and cultivated forms, are often variegated
     with a silver and green coloration. The inflorescence bears unisexual flowers in a spadix, with a short zone of female flowers near the base, and a
     wider zone of male flowers nearer the tip. The fruit is a fleshy berry that ripens red. The fruit is a thin layer covering one large seed. Plants
     of the genus are native to humid, shady tropical forest habitat, normally in South and Southeast Asia.') ON CONFLICT DO NOTHING;

INSERT into plants (plant_id, plant_name, plant_name_latin, watering, temp_max, temp_min, ideal_light, description)
VALUES
    (10, 'Blue Agave', 'Agave verschaffeltii', 'every week', '35', '12', '6 or more hours of direct sunlight per day',
     'Agave tequilana, commonly called blue agave (agave azul) or tequila agave, is an agave plant that is an important economic product of Jalisco,
     Mexico, due to its role as the base ingredient of tequila, a popular distilled beverage. The high production of sugars named agavins, mostly
     fructose, in the core of the plant is the main characteristic that makes it suitable for the preparation of alcoholic beverages.') ON CONFLICT DO NOTHING;



insert into users (user_id, auth_id, user_email, user_name) values
    (1,1,'user1@mil.com', 'user1') ON CONFLICT DO NOTHING;

insert into users (user_id, auth_id, user_email, user_name) values
    (2,2,'user2@mil.com', 'user2') ON CONFLICT DO NOTHING;


insert into userplants (user_plant_id, start_date, user_plant_name, plant_id, user_id) values
    (1, TO_DATE('20170103','YYYYMMDD') ,'new plant for user1', 5, 1) ON CONFLICT DO NOTHING;

insert into userplants (user_plant_id, start_date, user_plant_name, plant_id, user_id) values
    (2, TO_DATE('20221027','YYYYMMDD'),'anonther new plant for user1', 7, 1) ON CONFLICT DO NOTHING;

insert into userplants (user_plant_id, start_date, user_plant_name, plant_id, user_id) values
    (3, TO_DATE('20010101','YYYYMMDD'),'new plant for user2', 7, 2) ON CONFLICT DO NOTHING;
