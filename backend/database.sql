CREATE TABLE model (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(14),
	marque ENUM('Apple','Samsung'),
	ram ENUM('2GB','4GB','8GB','16GB','32GB'),
	storage ENUM('16GB','32GB','64GB','128GB','256GB','512GB')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



CREATE TABLE product (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  state ENUM('DEEE','REPARABLE','BLOQUE','RECONDITIONABLE','RECONDITIONNE'),
	antutu_value INT(40),
  has_accessories BOOLEAN NOT NULL DEFAULT FALSE,
  price INT,
  category ENUM('1-HC','2-C','3-B','4-A','5-Premium'),
  commentary TEXT,
  id_model int(11) UNSIGNED,
  FOREIGN KEY (id_model) REFERENCES model(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

insert into model (name, marque, ram, storage) values ('iPhone XR', 'Apple', '4GB', '512GB');
insert into model (name, marque, ram, storage) values ('iPhone 11', 'Apple', '4GB', '64GB');
insert into model (name, marque, ram, storage) values ('iPhone SE', 'Apple', '8GB', '16GB');
insert into model (name, marque, ram, storage) values ('Galaxy S10', 'Samsung', '4GB', '64GB');
insert into model (name, marque, ram, storage) values ('Galaxy Note 10', 'Samsung', '8GB', '64GB');
insert into model (name, marque, ram, storage) values ('iPhone X', 'Apple', '4GB', '64GB');
insert into model (name, marque, ram, storage) values ('Galaxy Note 10', 'Samsung', '32GB', '64GB');

insert into product(state,antutu_value, has_accessories,category,price, commentary,id_model) 
values('BLOQUE',100000,false,'1-HC',80,"commentaire test",1);