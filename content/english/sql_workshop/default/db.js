// Galaxy database
alasql("CREATE TABLE galaxy(planet_number INT, planet_name STRING, leader_name STRING, population INT, coordinates INT)");

alasql("INSERT INTO galaxy VALUES (1,'Puzzle Land','Thomas Stewart',10000,1)");
alasql("INSERT INTO galaxy VALUES (2,'Planet of Mold','Lucy Stewart',90000,3)");
alasql("INSERT INTO galaxy VALUES (3,'Ice Cream Freezer Land','James Dunkeld',20000,5)");
alasql("INSERT INTO galaxy VALUES (4,'Planet of Fun','Olivia Windsor',20000,6)");
alasql("INSERT INTO galaxy VALUES (5,'Desert Quadrant','Chloe Canmore',60000,7)");
alasql("INSERT INTO galaxy VALUES (6,'Planet of Boredom','N/A',90000,8)");
alasql("INSERT INTO galaxy VALUES (7,'Nebula Planet','Harry Windsor',60000,9)");
alasql("INSERT INTO galaxy VALUES (8,'Ocean World','Oliver Stuart',10000,10)");
alasql("INSERT INTO galaxy VALUES (9,'Space Zone','N/A',0,11)");
alasql("INSERT INTO galaxy VALUES (10,'Eeh-Eeh','Amelia Tudor',90000,24)");
alasql("INSERT INTO galaxy VALUES (11,'Planet of Pizza','N/A',10000,27)");
alasql("INSERT INTO galaxy VALUES (12,'Planet of Tacos','Jack Planta',900,60)");  

// Planet database
alasql("CREATE TABLE planet(city_number INT, name STRING, population INT, favorite_food STRING)");
alasql("INSERT INTO planet VALUES (1,'LEGO City',1500,'Pizza')");
alasql("INSERT INTO planet VALUES (2,'Playground City',1000,'Pizza')");
alasql("INSERT INTO planet VALUES (3,'City of Games',6000,'Hotdog')");
alasql("INSERT INTO planet VALUES (4,'Fun Capital',9500,'Hamburger')");
alasql("INSERT INTO planet VALUES (5,'Seriously Fun',2000,'Taco')");

// Items database
alasql("CREATE TABLE items(object STRING, date_created DATE, location STRING, color STRING, height INT, short_description STRING)");

alasql("INSERT INTO items VALUES ('totem','1738-09-12','City of Fun', 'sprinkles',10,'Confetti Cannon')");
alasql("INSERT INTO items VALUES ('totem','1738-10-12','Fun Capital','blue',10,'Infinite Buffet Table')");
alasql("INSERT INTO items VALUES ('totem','1738-11-02','Playground City','red',10,'Red stuff goes boom')");
alasql("INSERT INTO items VALUES ('totem','1729-01-03','UNKNOWN','gold',30,'UNKNOWN')");

alasql("INSERT INTO items VALUES ('ladder','1738-09-01','Fun Capital','red',100,'Tall ladder')");
alasql("INSERT INTO items VALUES ('ladder','1738-09-02','Fun Capital','blue',60,'Medium ladder')");
alasql("INSERT INTO items VALUES ('ladder','1738-09-03','Fun Capital','brown',20,'Short ladder')");

alasql("INSERT INTO items VALUES ('key','1738-09-04','Fun Capital','gold',3,'3 loops key')");
alasql("INSERT INTO items VALUES ('key','1738-09-05','Fun Capital','gold',2,'2 loops key')");
alasql("INSERT INTO items VALUES ('key','1738-09-06','Fun Capital','gold',1,'1 loop  key')");


// People database
alasql("CREATE TABLE people(name STRING, favorite_food STRING, city_location STRING, favorite_subject STRING, favorite_movie STRING)");

alasql("INSERT INTO people VALUES ('Olivia Windsor','Hamburger','Fun Capital', 'science','Hidden Figures')");
alasql("INSERT INTO people VALUES ('Mr. Emmet','Pizza','LEGO City', 'engineering','The LEGO movie')");
alasql("INSERT INTO people VALUES ('Dr. Phi','Pizza','Playground City', 'math','Big Hero 6')");
alasql("INSERT INTO people VALUES ('Caroline Jones','Hotdog','City of Games', 'technology','Meet the Robinsons')");
alasql("INSERT INTO people VALUES ('Eve Dragonheart','Taco','Seriously Fun', 'science','WALL-E')");
alasql("INSERT INTO people VALUES ('Duchess Leia','Pizza','Playground City', 'engineering','Star Wars')");

alasql("CREATE TABLE command_center(name STRING)");
alasql("INSERT INTO command_center VALUES ('Kim')");
alasql("INSERT INTO command_center VALUES ('Justin')");