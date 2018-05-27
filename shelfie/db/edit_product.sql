UPDATE products
SET imageurl = $2, productname = $3, price = $4
where id = $1;
select *
from products;