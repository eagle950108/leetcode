# Write your MySQL query statement below
select email from (
    select email, count(*) as cnt from Person group by email
) tmp where tmp.cnt > 1
