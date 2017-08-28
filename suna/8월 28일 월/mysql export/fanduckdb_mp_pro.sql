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
-- Table structure for table `mp_pro`
--

DROP TABLE IF EXISTS `mp_pro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mp_pro` (
  `MP_NO` int(11) NOT NULL AUTO_INCREMENT COMMENT '영화인일련번호',
  `MNO` int(11) NOT NULL COMMENT '회원일련번호',
  `MP_PATH` varchar(250) NOT NULL COMMENT '파일경로',
  `MP_NICK` varchar(100) NOT NULL COMMENT '별명',
  `MP_CONT` text NOT NULL COMMENT '내용',
  `MP_ALAM` tinyint(1) DEFAULT NULL COMMENT '알림여부YN',
  `MP_FILMO` varchar(400) DEFAULT NULL COMMENT '필모리스트',
  `MP_CODE` varchar(200) DEFAULT NULL COMMENT '영화인코드',
  `MP_TYPE` varchar(10) DEFAULT NULL COMMENT '유형',
  PRIMARY KEY (`MP_NO`),
  KEY `FK_MEMB_TO_MP_PRO` (`MNO`),
  CONSTRAINT `FK_MEMB_TO_MP_PRO` FOREIGN KEY (`MNO`) REFERENCES `memb` (`MNO`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COMMENT='영화인프로필';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mp_pro`
--

LOCK TABLES `mp_pro` WRITE;
/*!40000 ALTER TABLE `mp_pro` DISABLE KEYS */;
INSERT INTO `mp_pro` VALUES (13,2,'photo/1503319465392_1_200.png','강필선','ㅁ',0,'미처몰랐던건|나는 야한 여자가 좋다 3 무삭제감독판|나는 야한 여자가 좋다 3|개: dog eat dog|수상한 그녀|포화속으로|밀실|물보다 진한|서울 137|꾼','20207827','배우'),(15,1,'photo/1503627163137_2_200.png','이제훈','..ㅓㅓㅓㅓ',0,'박열|아이 캔 스피크|탐정 홍길동: 사라진 마을|파파로티|분노의 윤리학|가디언즈|점쟁이들|건축학개론|고지전|파수꾼|인플루언스|친구사이?|몰디브 환상특급|미쓰 커뮤니케이션|귀 鬼','10057349','배우'),(16,1,'photo/1503645910094_2_200.png','김고은','김고은',0,'계춘할망|성난 변호사|협녀, 칼의 기억|차이나타운|몬스터|은교','20125838','배우'),(18,1,'photo/1503648105033_1_200.png','유이든','소개글을 입력해주세요.',0,'여자들','20279269','배우'),(19,1,'photo/1503648338735_2_200.png','김남주','친구들',0,'친구들','20281870','감독'),(20,4,'photo/1503653259317_1_200.png','김고은','안녕',0,'계춘할망|성난 변호사|협녀, 칼의 기억|차이나타운|몬스터|은교','20125838','배우');
/*!40000 ALTER TABLE `mp_pro` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-08-28  9:49:45
