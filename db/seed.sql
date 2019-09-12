create table wlh10 (
    id SERIAL primary key,
    first_name varchar(60),
    last_name varchar(60),
    left_side boolean,
    right_side boolean
);

select * from wlh10;


insert into wlh10 (first_name, last_name, left_side, right_side)
values 
('Katie', 'Cruise', true, false),
('Sean', 'Scott', false, true);