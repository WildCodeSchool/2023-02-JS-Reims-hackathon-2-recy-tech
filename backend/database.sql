CREATE TABLE model (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(14),
	marque ENUM('Apple','Samsung'),
	ram ENUM('1Go','2Go','3Go','4Go','6Go','8Go','16Go','32Go'),
	storage ENUM('16GB','32GB','64GB','128GB','256GB','512GB'),
  network ENUM('3G','4G','5G'),
  img TEXT
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



CREATE TABLE product (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  state ENUM('DEEE','REPARABLE','BLOQUE','RECONDITIONABLE','RECONDITIONNE'),
  antutu_value INT,
  has_accessories BOOLEAN,
  price INT,
  category ENUM('1-HC','2-C','3-B','4-A','5-Premium'),
  commentary TEXT,
  id_model int(11) UNSIGNED,
  FOREIGN KEY (id_model) REFERENCES model(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


insert into model (name, marque, ram, storage,network,img) values ('iPhone 7', 'Apple', '2Go', '128GB','4G',"https://d10cggh4v5dmy2.cloudfront.net/media/catalog/product/cache/17faa7f491c70ff08effdc50b0fd4c4b/i/p/iphone_7_black_full_cover_8b0f.jpg");
insert into model (name, marque, ram, storage,network,img) values ('iPhone 8', 'Apple', '3Go', '64GB','4G'," ");
insert into model (name, marque, ram, storage,network,img) values ('iPhone SE', 'Apple', '2Go', '32GB','4G',"");
insert into model (name, marque, ram, storage,network,img) values ('Galaxy S10', 'Samsung', '4Go', '64GB','4G',"");
insert into model (name, marque, ram, storage,network,img) values ('Galaxy Note 10', 'Samsung', '3Go', '64GB','4G',"");
INSERT INTO model (name, marque, ram, storage, network, img) 
VALUES ('iPhone X', 'Apple', '3Go', '64GB', '4G', 'https://d10cggh4v5dmy2.cloudfront.net/media/catalog/product/cache/17faa7f491c70ff08effdc50b0fd4c4b/i/p/iphone_x_silver_front_83a5.jpg');

INSERT INTO model (name, marque, ram, storage, network, img) 
VALUES ('iPhone XS', 'Apple', '4Go', '64GB', '4G', 'https://d10cggh4v5dmy2.cloudfront.net/media/catalog/product/cache/17faa7f491c70ff08effdc50b0fd4c4b/i/p/iphone_xs_max_grey_front_8da3.jpg');

INSERT INTO model (name, marque, ram, storage, network, img) 
VALUES ('iPhone 11', 'Apple', '4Go', '128GB', '4G', 'https://d10cggh4v5dmy2.cloudfront.net/media/catalog/product/cache/17faa7f491c70ff08effdc50b0fd4c4b/i/p/iphone_11_white_front_9500.jpg');

INSERT INTO model (name, marque, ram, storage, network, img) 
VALUES ('iPhone 12', 'Apple', '4Go', '128GB', '5G', 'https://d10cggh4v5dmy2.cloudfront.net/media/catalog/product/cache/17faa7f491c70ff08effdc50b0fd4c4b/i/p/iphone_12_mini_white_front_9045.jpg');

INSERT INTO model (name, marque, ram, storage, network, img) 
VALUES ('iPhone 13', 'Apple', '6Go', '256GB', '5G', 'https://d10cggh4v5dmy2.cloudfront.net/media/catalog/product/cache/17faa7f491c70ff08effdc50b0fd4c4b/i/p/iphone_13_pro_max_gold_front_9098.jpg');

INSERT INTO model (name, marque, ram, storage, network, img) 
VALUES ('Galaxy A51', 'Samsung', '4Go', '128GB', '4G', 'https://d10cggh4v5dmy2.cloudfront.net/media/catalog/product/cache/17faa7f491c70ff08effdc50b0fd4c4b/s/a/samsung_galaxy_a51_white_front_9363.jpg');

INSERT INTO model (name, marque, ram, storage, network, img) 
VALUES ('Galaxy A71', 'Samsung', '6Go', '128GB', '4G', 'https://d10cggh4v5dmy2.cloudfront.net/media/catalog/product/cache/17faa7f491c70ff08effdc50b0fd4c4b/s/a/samsung_galaxy_a71_black_front_8d6b.jpg');


