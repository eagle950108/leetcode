# Write your MySQL query statement below
select d.dName as Department, e.name as Employee, d.maxSalary as Salary from Employee e left join
(select departmentId as id, Department.name as dName, max(salary) maxSalary from employee left join Department on departmentId = Department.id group by departmentId) as d on e.departmentId = d.id where e.salary = d.maxSalary