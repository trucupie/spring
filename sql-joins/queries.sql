-- write your queries here
-- connect to database
\c joins_exercise

-- Join the two tables so that every column and record appears, regardless of if there is not an owner_id 
SELECT
*
FROM owners o
FULL JOIN vehicles v ON o.id = v.owner_id;

-- Count the number of cars for each owner. Display the owners first_name , last_name and count of vehicles. The first_name should be ordered in ascending order.
SELECT
o.first_name,
o.last_name,
COUNT(v.id) AS COUNT
FROM owners o
 JOIN vehicles v ON o.id = v.owner_id
GROUP BY o.id
ORDER BY o.first_name ASC;

-- Count the number of cars for each owner and display the average price for each of the cars as integers. Display the owners first_name , last_name, average price and count of vehicles. The first_name should be ordered in descending order. Only display results with more than one vehicle and an average price greater than 10000.
SELECT
o.first_name,
o.last_name,
ROUND(AVG(v.price)) as average_price,
COUNT(v.id) AS count
FROM owners o
JOIN vehicles v ON o.id = v.owner_id
GROUP BY o.id
HAVING COUNT(v.id) > 1 AND AVG(v.price) > 10000
ORDER BY o.first_name DESC;