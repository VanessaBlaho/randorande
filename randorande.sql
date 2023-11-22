-- MariaDB dump 10.19  Distrib 10.4.28-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: randorande
-- ------------------------------------------------------
-- Server version	11.1.3-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `budgets`
--

DROP TABLE IF EXISTS `budgets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `budgets` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `budgets`
--

LOCK TABLES `budgets` WRITE;
/*!40000 ALTER TABLE `budgets` DISABLE KEYS */;
INSERT INTO `budgets` VALUES (1,'free','2023-11-18 13:08:08','2023-11-18 13:08:08'),(2,'low budget','2023-11-18 13:08:08','2023-11-18 13:08:08'),(3,'medium budget','2023-11-18 13:08:08','2023-11-18 13:08:08');
/*!40000 ALTER TABLE `budgets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `entries`
--

DROP TABLE IF EXISTS `entries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `entries` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `journal_id` bigint(20) unsigned NOT NULL,
  `rande_id` bigint(20) unsigned NOT NULL,
  `location` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  `entry_text` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `entries`
--

LOCK TABLES `entries` WRITE;
/*!40000 ALTER TABLE `entries` DISABLE KEYS */;
INSERT INTO `entries` VALUES (1,1,6,'Some location','date',NULL,'Your entry text here','2023-11-20 12:39:35','2023-11-20 12:39:35'),(2,1,37,'Some location','date',NULL,'Your entry text here','2023-11-20 14:57:49','2023-11-20 14:57:49'),(3,1,35,'Some location','date',NULL,'Your entry text here','2023-11-21 14:54:31','2023-11-21 14:54:31');
/*!40000 ALTER TABLE `entries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `journals`
--

DROP TABLE IF EXISTS `journals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `journals` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `journals`
--

LOCK TABLES `journals` WRITE;
/*!40000 ALTER TABLE `journals` DISABLE KEYS */;
INSERT INTO `journals` VALUES (1,1,'2023-11-18 14:46:02','2023-11-18 14:46:02');
/*!40000 ALTER TABLE `journals` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (2,'2023_11_13_104205_create_users_table',1),(3,'2014_10_12_100000_create_password_reset_tokens_table',2),(4,'2014_10_12_200000_add_two_factor_columns_to_users_table',2),(5,'2019_08_19_000000_create_failed_jobs_table',2),(6,'2019_12_14_000001_create_personal_access_tokens_table',2),(7,'2023_11_13_104449_create_randes_table',2),(8,'2023_11_13_104539_create_rande_user_table',2),(9,'2023_11_13_104608_create_budgets_table',2),(10,'2023_11_13_104623_create_journals_table',2),(11,'2023_11_13_104651_create_entries_table',2);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_reset_tokens`
--

DROP TABLE IF EXISTS `password_reset_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_reset_tokens`
--

LOCK TABLES `password_reset_tokens` WRITE;
/*!40000 ALTER TABLE `password_reset_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_reset_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) unsigned NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rande_user`
--

DROP TABLE IF EXISTS `rande_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rande_user` (
  `rande_id` bigint(20) unsigned NOT NULL,
  `user_id` bigint(20) unsigned NOT NULL,
  UNIQUE KEY `rande_user_rande_id_user_id_unique` (`rande_id`,`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rande_user`
--

LOCK TABLES `rande_user` WRITE;
/*!40000 ALTER TABLE `rande_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `rande_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `randes`
--

DROP TABLE IF EXISTS `randes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `randes` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  `winter` tinyint(1) DEFAULT NULL,
  `spring` tinyint(1) DEFAULT NULL,
  `summer` tinyint(1) DEFAULT NULL,
  `fall` tinyint(1) DEFAULT NULL,
  `indoors` tinyint(1) DEFAULT NULL,
  `budget_id` bigint(20) unsigned DEFAULT NULL,
  `hint_path` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `randes`
--

LOCK TABLES `randes` WRITE;
/*!40000 ALTER TABLE `randes` DISABLE KEYS */;
INSERT INTO `randes` VALUES (1,'Cook dinner','Make your own pizza from scratch. Try tossing your dough up in the air. Can you do it like a real pizzamaker? Arrange your pizza toppings and make art out of it.','/images/randes/1_cook.png',1,1,1,1,1,2,'food','2023-11-18 13:08:08','2023-11-18 13:08:08'),(2,'Have a picnic','Nothing beats al fresco dining. Pack yourselves a basket of goodies and have a picnic in your nearest park. Is the weather outside frightful? Have your picnic indoors on the floor in your living room instead.','/images/randes/2_picnic.png',0,1,1,1,1,2,'food','2023-11-18 13:08:08','2023-11-18 13:08:08'),(3,'Go for a hike','Get some exercise together by taking a nice long hike. An adventure is the perfect time to bond with each other. Is there no natural surroundings or hiking trails near you? Hiking doesn\'t always have to be in the woods. Take a \"hike\" in your city or neighborhood instead.','/images/randes/3_sunset.png',0,1,1,0,0,2,'walk','2023-11-18 13:08:08','2023-11-18 13:08:08'),(4,'Play a board game','Play a board game or teach yourself a new game of cards! If you\'re feeling super creative, make your own board game from scratch.','/images/randes/4_games.png',1,1,1,1,1,1,'dice','2023-11-18 13:08:08','2023-11-18 13:08:08'),(5,'Spa night at home','You both deserve some self-care! Buy face masks from your local drug store and check in with yourselves. Or better yet, look up a face mask recipe and make your own. Play some music while you wind down or just have a nice chat about your day.','/images/randes/5_spa_night.png',1,1,1,1,1,2,'mask','2023-11-18 13:08:08','2023-11-18 13:08:08'),(6,'Go through old photos','A picture is worth 1,000 words. Look through old photos of yourselves and talk about those precious moments in detail. Be sure to mention your best childhood memories.','/images/randes/6_old_photos.png',1,1,1,1,1,1,'photo','2023-11-18 13:08:08','2023-11-18 13:08:08'),(7,'Zoo or aquarium','Visit your local zoo or aquarium. What was your favorite animal or fish you saw?','/images/randes/7_zoo_aquarium.png',1,1,1,1,1,3,'animal','2023-11-18 13:08:08','2023-11-18 13:08:08'),(8,'Scavenger hunt','Each of you choose 10 random objects from your house. Hide them in secret places and create a list with hints for the other person to find them. Give each other a passionate kiss every time you find one of the objects.','/images/randes/8_scavenger_hunt.png',1,1,1,1,1,1,'dice','2023-11-18 13:08:08','2023-11-18 13:08:08'),(9,'Explore a museum','Find a list of museums in your area and choose one randomly. Pay the museum a visit.','/images/randes/9_museum.png',1,1,1,1,1,3,'art','2023-11-18 13:08:08','2023-11-18 13:08:08'),(10,'Got out for dessert','Go to your favorite café or confectionery and treat yourself to a slice of heaven. If you\'re watching your figure, get one dessert and share it! There\'s nothing more romantic than asking the waiter to bring two forks.','/images/randes/10_dessert.png',1,1,1,1,1,2,'dessert','2023-11-18 13:08:08','2023-11-18 13:08:08'),(11,'Have a baking competition','Who can bake the best cookies or cake? Find a dessert recipe online that you both will enjoy. Then each of you make your own version separately. Bake both of your versions in the oven at the same time and try them. Who baked it better?','/images/randes/11_bake.png',1,1,1,1,1,2,'dessert','2023-11-18 13:08:08','2023-11-18 13:08:08'),(12,'Try a new workout','Find a cool workout online or maybe an aerobics video on YouTube. Do the workout together. Look into each other\'s eyes after every exercise and plant a big kiss.','/images/randes/12_workout.png',1,1,1,1,1,1,'sports','2023-11-18 13:08:08','2023-11-18 13:08:08'),(13,'Do a puzzle','Buy a new puzzle from your local toy shop or find a free puzzle to do online.','/images/randes/13_puzzle.png',1,1,1,1,1,2,'dice','2023-11-18 13:08:08','2023-11-18 13:08:08'),(14,'Movie night at home','Double feature: each of you share one of your favorite movies that the other hasn\'t seen before. It can be a film from your childhood or whenever. You\'ll learn a lot about each other\'s tastes.','/images/randes/14_movie_night.png',1,1,1,1,1,1,'movie','2023-11-18 13:08:08','2023-11-18 13:08:08'),(15,'Wine tasting','Buy different bottles of wine. They don\'t have to be expensive. Then try them out at home. Or if your budget allows, sign up for a wine tasting at your local wine bar or winery.','/images/randes/15_wine_tasting.png',1,1,1,1,1,3,'wine','2023-11-18 13:08:08','2023-11-18 13:08:08'),(16,'Go thrift shopping','Google all the thrift shops in your area and visit every single one of them. But you don\'t have to buy anything if you\'re budget is tight. Make a scavenger hunt out of it: how many leopard print pieces of clothing can you find? How many neon-colored tracksuits?','/images/randes/16_thrift_shopping.png',1,1,1,1,1,2,'clothing','2023-11-18 13:08:08','2023-11-18 13:08:08'),(17,'Make a romantic playlist','Make a playlist of all your favorite love songs. If you have wine or tea at home, pour yourself a glass or cup and sip away as you listen to the soothing music.','/images/randes/17_playlist.png',1,1,1,1,1,1,'music','2023-11-18 13:08:08','2023-11-18 13:08:08'),(18,'Watch a sports game','Find a sports game to watch on TV or online. Not into sports? Remember that not all sports involve balls. Watch a poker match, ice skating, or a dance competition. The possibilities are endless.','/images/randes/18_sports_game.png',1,1,1,1,1,1,'sports','2023-11-18 13:08:08','2023-11-18 13:08:08'),(19,'Cheese tasting','Go to your local delicatessen and buy yourself different cheeses. Then have your own cheese tasting experience at home. Rate each cheese on a scale of 1 to 10.','/images/randes/19_cheese_tasting.png',1,1,1,1,1,3,'food','2023-11-18 13:08:08','2023-11-18 13:08:08'),(20,'Go ice skating','Find your nearest winter skating rink and hit the ice! If there\'s none near you, a roller rink will do. Or just go rollerblading at home. What matters is you\'re spending time with each other on wheels and are there to catch the other if they fall.','/images/randes/20_ice_skating.png',1,0,0,0,0,3,'sports','2023-11-18 13:08:08','2023-11-18 13:08:08'),(21,'Build a snowman','Create a snowman together. Or better yet, make a competition out of it and see who makes the best snowman. Ask a passerby which snowman they think is the best. Is there no snow this winter? Make a castle out of sticks instead.','/images/randes/21_snowman.png',1,0,0,0,0,1,'snow','2023-11-18 13:08:08','2023-11-18 13:08:08'),(22,'Watch the sunset','Sit and watch the sunset. Sounds so cliché, right? But there\'s a reason millions of couples still do it. There\'s nothing more captivating than the natural beauty of the sun setting on the horizon and sharing it with your darling.','/images/randes/22_sunset.png',0,0,1,0,0,1,'sun','2023-11-18 13:08:08','2023-11-18 13:08:08'),(23,'Write each other love letters','All you need is two pieces of paper, two envelopes, and two pens. Write each other a love letter just like your grandparents use to do. Stick your letter in an envelope and hide it somewhere. Give each other hints on where to find it. Then read them out loud to each other in your best romantic voice.','/images/randes/23_love_letters.png',1,1,1,1,1,1,'envelope','2023-11-18 13:08:08','2023-11-18 13:08:08'),(24,'Buy a new plant','Go to your nearest flower shop and buy a crazy, cool, new plant for your home décor. Or even buy a pack of seeds and plant something from scratch. Will it be a tomato plant? Just flowers? The choice is yours!','/images/randes/24_plant.png',0,1,1,1,1,2,'plant','2023-11-18 13:08:08','2023-11-18 13:08:08'),(25,'Make a bucket list','Many people talk about their bucket lists, but never put it down on paper. Make your own bucket lists then share it with each other. Is there something on your bucket lists you can do together in the near future? Make plans and do it!','/images/randes/25_bucket_list.png',1,1,1,1,1,1,'notepad','2023-11-18 13:08:08','2023-11-18 13:08:08'),(26,'Ride bikes','Get carried away by the calming breeze of a bike ride. You don\'t have to be professional cyclists to have a good time. If you don\'t own your own bike, try a bike sharing app. Who can cycle the fastest?','/images/randes/26_bike_ride.png',0,1,1,0,0,2,'sports','2023-11-18 13:08:08','2023-11-18 13:08:08'),(27,'Go bowling','Slay in your lane! Head to your local bowling alley and play a couple of bowling matches. If you\'re feeling extra competitive, join a bowling league together. If you\'re on a tighter budget, make your own bowling alley at home. All you need is 9 empty bottles and a ball!','/images/randes/27_bowling.png',1,1,1,1,1,3,'sports','2023-11-18 13:08:08','2023-11-18 13:08:08'),(28,'Play mini golf','The perfect outdoor outing for a mid-summer day. Put on your best shorts and head to your local mini golf course. If there\'s none in your area, try frisbee golf instead. All you need is a frisbee and a bucket to toss the frisbee in.','/images/randes/28_golf.png',0,1,1,0,0,3,'sports','2023-11-18 13:08:08','2023-11-18 13:08:08'),(29,'Go to IKEA','Whether you’re craving Swedish meatballs or just window shopping for new bedsheets, a trip to IKEA is always a fun outing.','/images/randes/29_ikea.png',1,1,1,1,1,2,'walk','2023-11-18 13:08:08','2023-11-18 13:08:08'),(30,'Escape room','Looking for a way to get closer? An escape room could be the answer. Learn to work as a team to find your escape route. On a tight budget? Find one of many free escape games online and try it in your own town.','/images/randes/30_escape_room.png',1,1,1,1,1,2,'walk','2023-11-18 13:08:08','2023-11-18 13:08:08'),(31,'Farmer\'s market','Find your local farmer\'s market and step out of your comfort zone. Try new foods or shop for a cool new recipe you found online. If you\'re not looking to buy anything, take selfies at different stands and post them on social media. Make your friends or followers think you had the time of your lives.','/images/randes/31_farmers_market.png',0,1,1,0,0,2,'food','2023-11-18 13:08:08','2023-11-18 13:08:08'),(32,'Visit a fortune teller','Divine divination. Google your closest fortune teller or psychic and have your future read to you just for laughs. Whether it\'s a crystal ball, palm reading, or reading tea leaves, you\'re bound to have a lot of fun. As an alternative, make up your own horoscopes.','/images/randes/32_fortune_teller.png',1,1,1,1,1,2,'mystery','2023-11-18 13:08:08','2023-11-18 13:08:08'),(33,'Draw each other','Find some scratch paper and writing utensils of your choice. Don\'t be afraid to get creative and draw each other in different styles. Try Picasso Cubism, German Expressionism, or Renaissance styles. Spice things up by posing for each other nude.','/images/randes/33_draw_each_other.png',1,1,1,1,1,1,'art','2023-11-18 13:08:08','2023-11-18 13:08:08'),(34,'Visit a cemetery','Pay a visit to a local cemetery of your choosing and go for a stroll. If you\'re feeling generous, find a grave that\'s been neglected. Buy some flowers for the grave or make your own boquet out of nearby weeds or plants. Wish them well in the afterlife.','/images/randes/34_cemetery.png',1,1,1,1,0,1,'walk','2023-11-18 13:08:08','2023-11-18 13:08:08'),(35,'Cartoons from childhood','Each of you share an episode of one of your favorite childhood cartoons. If it\'s the weekend, watch them on a Saturday morning in bed with a cup of coffee. If you choose to watch during the day or in the evening, have a cup of herbal tea instead. Be sure to snuggle up close.','/images/randes/35_cartoons.png',1,1,1,1,1,1,'movie','2023-11-18 13:08:08','2023-11-18 13:08:08'),(36,'Take a pottery class','Sign up for a pottery class and make usable 3D art together. Whether you make coffee mugs, bowls, or goblets, be sure to incorporate your works of art into everyday use for your home. Everyone loves a good conversation starter: \"Oh, we made these in our pottery class. What do you think?\"','/images/randes/36_pottery.png',1,1,1,1,1,3,'art','2023-11-18 13:08:08','2023-11-18 13:08:08'),(37,'Dance party','Make a playlist of 20 of dance hits. Groove to the music in the comfort of your own home! Twirl, twerk, and drop it like it\'s hot. Dancing is a great way to bond and let off some steam.','/images/randes/37_dance_party.png',1,1,1,1,1,1,'music','2023-11-18 13:08:08','2023-11-18 13:08:08'),(38,'Hold a mock olympics','Play goofy games, win romantic prizes. 1.) GAME: Whose paper airplane can fly the furthest? PRIZE: Win a backrub. 2.) GAME: Who can balance a book on their head and walk in a straight line the longest? PRIZE: Win a foot rub.  MAKE YOUR OWN GAMES TOO.','/images/randes/38_mock_olympics.png',1,1,1,1,1,1,'sports','2023-11-18 13:08:08','2023-11-18 13:08:08'),(39,'Visit a video arcade','Visit your local arcade and play some 2-player video games. If there\'s no video arcades near you, play video games at home. Take turns playing if you have no 2-player games available.','/images/randes/39_arcade.png',1,1,1,1,1,2,'dice','2023-11-18 13:08:08','2023-11-18 13:08:08'),(40,'Make fancy cocktails','Look up a new cocktail recipe online and make it yourself. Don\'t drink alcohol? Make mocktails instead. Then sip away and have a laugh.','/images/randes/40_cocktails.png',1,1,1,1,1,3,'wine','2023-11-18 13:08:08','2023-11-18 13:08:08'),(41,'Bar crawl','Pick 5 cool bars. Maybe you\'ve been to them before, maybe you haven\'t. Grab a drink at each one. If you don\'t want to worry about having a designated driver, make your own bar crawl at home. Have a drink ready in each room and hop from one room to the next.','/images/randes/41_bar_crawl.png',1,1,1,1,1,3,'beer','2023-11-18 13:08:08','2023-11-18 13:08:08'),(42,'Art gallery','Google all art galleries in your area and choose one randomly to visit. Bring a pad of paper and pencils with you. Pick your favorite work of art and sketch it together. Who has the best sketch?','/images/randes/42_art_gallery.png',1,1,1,1,1,3,'art','2023-11-18 13:08:08','2023-11-18 13:08:08'),(43,'Play pool or darts','Find your local dive bar with a pool table and darts and play a couple rounds. Alternatively, make your own darts game.','/images/randes/43_darts.png',1,1,1,1,1,2,'dice','2023-11-18 13:08:08','2023-11-18 13:08:08'),(44,'Visit a botanical garden','Go for a stroll in your local botanical garden or park. What\'s your favorite plant you see and why?','/images/randes/44_botanical_garden.png',0,1,1,0,0,2,'walk','2023-11-18 13:08:08','2023-11-18 13:08:08'),(45,'Create bouquets','Spruce up your home interior with some green. Go to your local flower shop and make your own custom bouquets for each other.','/images/randes/45_bouquet.png',1,1,1,1,1,2,'plant','2023-11-18 13:08:08','2023-11-18 13:08:08'),(46,'Afternoon tea time','What\'s the tea, sis? Brew yourself some tea at home and gossip about people you know. If your budget allows, find a fancy teahouse and have tea time there. Don\'t forget to have some nice, bite-sized tea sandwiches.','/images/randes/46_tea_time.png',1,1,1,1,1,2,'tea','2023-11-18 13:08:08','2023-11-18 13:08:08'),(47,'Mushroom picking','Find a free mushroom guide online and go mushroom picking in your local forest or wooded area. Forage for mushrooms and try to identify them.','/images/randes/47_mushrooms.png',0,1,1,1,0,1,'mushroom','2023-11-18 13:08:08','2023-11-18 13:08:08'),(48,'Learn a magic trick','Each of you learn a new magic trick online. Demonstrate for each other the trick. Try and guess the secret to how it\'s done.','/images/randes/48_magic_tricks.png',1,1,1,1,1,1,'mystery','2023-11-18 13:08:08','2023-11-18 13:08:08'),(49,'Chocolate tasting','Buy a handful of different chocolates and try them all out at home. Rate them on a scale of 1 to 10. Which ones are your favorite and why?','/images/randes/49_chocolates.png',1,1,1,1,1,3,'food','2023-11-18 13:08:08','2023-11-18 13:08:08'),(50,'Go to a music event','Find an upcoming music event in your area. Whether it\'s a concert, open mic night, karaoke event, or what have you, you\'re guaranteed to have a great time!','/images/randes/50_concert.png',1,1,1,1,1,3,'music','2023-11-18 13:08:08','2023-11-18 13:08:08'),(51,'Go to the theater','Buy tickets to a play, musical, ballet, or opera at your local theater. Be sure to dress up for the occasion!','/images/randes/51_theater.png',1,1,1,1,1,3,'theater','2023-11-18 13:08:08','2023-11-18 13:08:08'),(52,'Act out a play','\"O Romeo, Romeo, wherefore art thou Romeo?\" Write your own dialogue for a short romantic play featuring two characters. Then act it out at home. Don\'t be afraid to get creative and use props too!','/images/randes/52_acting.png',1,1,1,1,1,1,'theater','2023-11-18 13:08:08','2023-11-18 13:08:08');
/*!40000 ALTER TABLE `randes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `role` varchar(255) NOT NULL DEFAULT 'user',
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `two_factor_secret` text DEFAULT NULL,
  `two_factor_recovery_codes` text DEFAULT NULL,
  `two_factor_confirmed_at` timestamp NULL DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'user','ephramryan','$2y$12$i4uMqL/h9lIKT5ooLLg26u9qTsTMdDMQMmAMiAebdVJK8VL.zuD0y',NULL,NULL,NULL,'linguistnick7@gmail.com','Nicholas','Daniels',NULL,'2023-11-18 14:46:02','2023-11-18 14:46:02');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-22 10:59:13
