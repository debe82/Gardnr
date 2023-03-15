select * from rat_to_be_adopted inner join city on rat_to_be_adopted.city=city.id;

SELECT rat_to_be_adopted.name, city.name DNAME 
FROM rat_to_be_adopted INNER join city
ON rat_to_be_adopted.city=city.id;