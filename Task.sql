-- Вывести названия и цены товаров, которые не были ни разу проданы
SELECT 
LastName
FROM Employees
WHERE
EmployeeID IN (SELECT EmployeeID FROM Orders)