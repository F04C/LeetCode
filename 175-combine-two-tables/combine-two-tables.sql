Select p.firstName, p.lastName, A.city, A.state
From Person as p
Left Join Address as A
ON A.personId = p.personId