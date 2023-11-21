# Write your MySQL query statement below
SELECT w2.id FROM Weather w1, Weather w2
WHERE w1.recordDate = (w2.recordDate - INTERVAL 1 DAY) AND w1.Temperature < w2.Temperature