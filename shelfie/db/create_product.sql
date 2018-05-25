INSERT INTO products
    (imageurl, productname, price)
VALUES
    ($1, $2, $3);
select *
from products