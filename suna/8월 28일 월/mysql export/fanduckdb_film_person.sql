-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: fanduckdb
-- ------------------------------------------------------
-- Server version	5.7.17-log

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
-- Table structure for table `film_person`
--

DROP TABLE IF EXISTS `film_person`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `film_person` (
  `FP_CODE` varchar(200) NOT NULL COMMENT '영화인코드',
  `FP_NAME` varchar(50) NOT NULL COMMENT '이름',
  PRIMARY KEY (`FP_CODE`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='영화인';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `film_person`
--

LOCK TABLES `film_person` WRITE;
/*!40000 ALTER TABLE `film_person` DISABLE KEYS */;
INSERT INTO `film_person` VALUES ('10003970','김동원'),('10004060','김명민'),('10029381','박찬욱'),('10037018','송강호'),('10057349','이제훈'),('10060674','장훈'),('20112696','김문환'),('20125838','김고은'),('20207827','강필선'),('20208626','류준열'),('20233666','채서진'),('20279269','유이든'),('20281332','이진성'),('20281870','김남주');
/*!40000 ALTER TABLE `film_person` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-08-28  9:49:46
