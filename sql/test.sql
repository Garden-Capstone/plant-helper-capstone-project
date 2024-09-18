SELECT *
FROM plant
WHERE
    plant_sunlight ?& array['full sun'] AND
    plant_watering = 'Average' AND
    plant_growth_rate = 'Low' ;


