update wlh10
set last_name = $1
where id = $2;

select * from wlh10
order by id;