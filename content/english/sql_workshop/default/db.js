// Galaxy database
alasql("CREATE TABLE galaxy(planet_number INT, planet STRING, leader STRING, population INT, coordinates INT)");

alasql("INSERT INTO galaxy VALUES (1,'Puzzle Land','Thomas Stewart',10000,1)");
alasql("INSERT INTO galaxy VALUES (2,'Planet of Mold','Lucy Stewart',90000,3)");
alasql("INSERT INTO galaxy VALUES (3,'Ice Cream Freezer Land','James Dunkeld',20000,5)");
alasql("INSERT INTO galaxy VALUES (4,'Planet of Fun','Olivia Windsor',20000,6)");
alasql("INSERT INTO galaxy VALUES (5,'Desert Quadrant','Chloe Canmore',60000,7)");
alasql("INSERT INTO galaxy VALUES (6,'Planet of Boredom',' ',90000,8)");
alasql("INSERT INTO galaxy VALUES (7,'Nebula Planet','Harry Windsor',60000,9)");
alasql("INSERT INTO galaxy VALUES (8,'Ocean World','Oliver Stuart',10000,10)");
alasql("INSERT INTO galaxy VALUES (9,'Space Zone','',0,11)");
alasql("INSERT INTO galaxy VALUES (10,'Eeh-Eeh','Amelia Tudor',90000,24)");
alasql("INSERT INTO galaxy VALUES (11,'Planet of Pizza','',10000,27)");
alasql("INSERT INTO galaxy VALUES (12,'Planet of Tacos','Jack Planta',900,60)");  

// Planet database
alasql("CREATE TABLE planet(city_number INT, name STRING, population INT, favorite_food STRING)");
alasql("INSERT INTO planet VALUES (1,'LEGO City',1500,'Pizza')");
alasql("INSERT INTO planet VALUES (2,'Playground City',1000,'Pizza')");
alasql("INSERT INTO planet VALUES (3,'City of Games',6000,'Hotdog')");
alasql("INSERT INTO planet VALUES (4,'Fun Capital',9500,'Hamburger')");
alasql("INSERT INTO planet VALUES (5,'Seriously Fun',2000,'Taco')");

// Items database
alasql("CREATE TABLE items(object STRING, date_created STRING, location STRING, color STRING, height INT, short_description STRING)");

alasql("INSERT INTO items VALUES ('totem','1738-09-12','City of Fun', 'sprinkles',10,'Confetti Cannon')");
alasql("INSERT INTO items VALUES ('totem','1738-10-12','Fun Capital','blue',10,'Infinite Buffet Table')");
alasql("INSERT INTO items VALUES ('totem','1738-11-02','Playground City','red',10,'Red stuff goes boom')");
alasql("INSERT INTO items VALUES ('totem','UNKNOWN','UNKNOWN','gold',30,'UNKNOWN')");

alasql("INSERT INTO items VALUES ('ladder','1738-09-01','Fun Capital','red',100,'Tall ladder')");
alasql("INSERT INTO items VALUES ('ladder','1738-09-02','Fun Capital','blue',60,'Medium ladder')");
alasql("INSERT INTO items VALUES ('ladder','1738-09-03','Fun Capital','brown',20,'Short ladder')");

alasql("INSERT INTO items VALUES ('key','1738-09-04','Fun Capital','gold',3,'3 loops key')");
alasql("INSERT INTO items VALUES ('key','1738-09-05','Fun Capital','gold',2,'2 loops key')");
alasql("INSERT INTO items VALUES ('key','1738-09-06','Fun Capital','gold',1,'1 loop  key')");

  
