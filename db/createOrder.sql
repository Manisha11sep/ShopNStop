insert into orders (orderuserid,orderamount,ordershipaddress,ordercity,orderstate,orderzip,orderphone,ordershipping,ordertax,orderemail	,orderdate,ordershipped,ordertrackingnumber)
values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)
returning *;