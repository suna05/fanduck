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
-- Table structure for table `board`
--

DROP TABLE IF EXISTS `board`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `board` (
  `BD_NO` int(11) NOT NULL AUTO_INCREMENT COMMENT '게시물번호',
  `TITL` varchar(100) NOT NULL COMMENT '제목',
  `TEXT` varchar(5000) DEFAULT NULL COMMENT '내용',
  `RDT` date NOT NULL COMMENT '등록일',
  `photo` varchar(200) NOT NULL COMMENT '대표사진',
  `List1` varchar(200) DEFAULT NULL,
  `List2` varchar(200) DEFAULT NULL,
  `List3` varchar(200) DEFAULT NULL,
  `List4` varchar(200) DEFAULT NULL,
  `List5` varchar(200) DEFAULT NULL,
  `List6` varchar(200) DEFAULT NULL,
  `List7` varchar(200) DEFAULT NULL,
  `List8` varchar(200) DEFAULT NULL,
  `List9` varchar(200) DEFAULT NULL,
  `mp_no` int(11) DEFAULT NULL,
  PRIMARY KEY (`BD_NO`),
  KEY `FK_MP_PRO_TO_BOARD` (`mp_no`)
) ENGINE=InnoDB AUTO_INCREMENT=119 DEFAULT CHARSET=utf8 COMMENT='게시판 상세';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `board`
--

LOCK TABLES `board` WRITE;
/*!40000 ALTER TABLE `board` DISABLE KEYS */;
INSERT INTO `board` VALUES (70,'','','2017-08-22','','1503366365244_4','1503366367814_3','','','','','','','',NULL),(73,'d','f','2017-08-23','1503466313931_2','1503466317418_2','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(74,'d','x','2017-08-23','1503466522864_3','1503466526545_3','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(76,'d','c','2017-08-23','1503466816069_5','','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(81,'','','2017-08-23','','1503469824695_1','1503469820418_2','1503469817657_4','','','',NULL,NULL,NULL,NULL),(82,'b','v','2017-08-23','1503469943627_3','1503469948453_2','1503469951596_3','1503469954196_5','','','',NULL,NULL,NULL,NULL),(85,'33','이름\n김고은(金高銀[1], Kim Go-eun)\n출생\n1991년 7월 2일 (26세), 서울특별시\n신체\n167cm, 48kg, B형\n성좌/지지\n게자리/양띠\n학력\n계원예술고등학교\n한국예술종합학교 연극원\n가족\n부모님, 1남1녀 중 막내\n종교\n개신교[2]\n데뷔\n2012년 영화 \'은교\'\n소속사\nBH 엔터테인먼트','2017-08-24','1503544533006_5','1503544561132_2','1503544564356_2','1503544568520_2','1503544572446_2','1503544575188_3','1503544577934_2','1503544581177_2','1503544585531_2','1503544588917_2',NULL),(86,'김고은 3','김고은 배우♡\n\n\n오랜만에 화보 현장에서 만난\n우리의 곤배우!\n여러분들도\n엄청 보고싶으셨죠?\n\n스티커 이미지\n \n이렇게 다양한 컨셉으로\n김고은 배우의 팔색조 매력을 \n탐구해보는 시간!\n\n지금부터 메모리 탈탈텁니다!\n\n스티커 이미지\n \n먼저,\n청초한 분위기로 시작해볼께요\n#삘쏘굿\n\n\n\n곤배우의 그윽한 눈빛에\n호두스트 쓰러집니다\n\n\n곤배우는 열일 중\n\n\n\n아련한 분위기를\n넘나 완벽하게 소화하는 곤배우\n\n저기요 언니, \n뭘 이렇게 많이 묻히고 다녀요?\n\n스티커 이미지\n\"아름다움이 덕지덕지\"\n\n\n이번엔 보이시 곤배우!\n블루블루하고 청량청량 합니다\n\n\n\n촬영 전, 세팅하다가\n#뜻밖의멍뭉미\n\n\n#전매특허 \n#햇살 미소\n\n\n\n\n\n\n봄날의 햇살을 한움큼 받으며\n매력 발산!\n\"가거라 상큼함이여!!!\"\n\n스티커 이미지\n아이 눈부셔\n\n   \n시크한 매력까지\n보너스로 뿌려드려요\n\n스티커 이미지\n이번엔 어떤 컨셉일까요?\n궁금궁금\n스티커 이미지\n \nWhite & Natural!!\n박시한 화이트 셔츠 차림으로 등장한\n내츄럴 곤배우\n\n화이트는 역시 진리죠!!\n\n\n\n\n요리보고\n\n\n조리봐도\n\n\n\n이 치명적인 러블리\n\n스티커 이미지\n \n준비하는 모습까지\nthe love\n\n\n이렇게 장난스럽다가도\n\n\n\n모니터는 신중하게!\n프로답습니다\n\n\n기분좋은 미소짤로\n이번 컨셉 촬영 마무리합니다\n이번엔\n도시녀 김고은을 만날 시간\n\n차도녀 느낌이 물씬!\n이번 컨셉도 펄풱합니다','2017-08-24','1503544813191_6','1503544851560_3','','','','1503544857961_4','','','','1503544865756_3',NULL),(87,'김고은 4','','2017-08-24','1503545524442_7','1503545533174_4','','1503545536752_3','','1503545540474_5','','1503545543557_3','','1503545548413_4',NULL),(88,'김고은 5','','2017-08-24','1503545674133_8','','','','','1503545682977_6','','','','',NULL),(97,'ㅌㅊㅊㅊㅊㅊㅊㅊㅊㅊㅊㅊㅊㅊㅊ','ㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹ','2017-08-24','1503554550044_4','1503554554989_2','','','','','','','','',NULL),(101,'이제훈','이제훈\n\n\n\nㅏ\nㅏ\nㅏ\nㅏ\nㅏ\nㅏ\nㅏ\n\nㄹㄹㄹㄹㄹ','2017-08-25','1503645696039_2','1503645700248_2','1503645702012_2','1503645704406_2','','1503645707261_2','','1503645709882_2','1503645721768_3','1503645715087_2',15),(102,'이제훈 2','','2017-08-25','1503645771376_4','1503645793718_3','1503645799773_3','1503645802059_3','1503645804906_3','1503645829830_5','1503645810934_2','1503645813687_3','1503645816938_4','1503645819669_3',15),(103,'김고은1','데뷔 이후 은교, 몬스터, 차이나타운, 협녀, 칼의 기억 등등 다양한 장르에서 주연을 맡았다. 이중 손익분기점을 넘긴 작품은 은교와 차이나타운인데,[6] 비평적인 면에서는 좋은 평가를 받고 있다.\n\n은교로 당해 신인상이란 신인상은 모조리 휩쓸며 스타로 떠오른 김고은은 이후 차기작을 선택하지 않고 학교로 돌아간다. 화보촬영과 홍보활동 등으로 바쁘게 활동을 이어가면서 연기에 대한 갈증이 더욱 심해졌기 때문이라는 설명. 이후 그녀는 한예종 동기들과 연극을 하고 서로의 연기를 평가하는 등 평범한 학교생활을 보냈다고 한다. \n\n은교 이후 그녀가 선택한 영화는 시실리 2km의 각본을 쓰고 오싹한 연애를 연출한 황인호 감독의 몬스터였다. 일각에서는 이 작품에서의 그녀의 연기에 대해 김고은이 보여줬어야 할 연기가 이도저도 아니게 붕 떠버렸다는 문제점을 제기했다. 원래 김고은이 맡은 역할인 복순 역은 미친년 역할이였는데, 점점 뒤로 갈수록 미친년이 아니라 그냥 착해 보이는 바보연기를 했다는 평이 있었다.[7] 배우 입장에서 캐릭터 해석을 잘못한 탓도 있지만 몬스터 영화 자체에 대한 평가도 안 좋은 것도 있었다. 물론 이는 감독이 스릴러 장르를 전혀 이해하지 못 하고 연기 지도를 잘못한 탓도 있다. \n','2017-08-25','1503645919486_5','1503645979848_4','1503645982137_4','1503645985844_4','1503645988562_4','1503645991452_6','1503646201075_4','1503645997598_4','1503645999882_5','1503646002468_4',16),(118,'이제훈 3','ㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹ','2017-08-27','1503838420940','1503838427643_1','','1503838430371_1','','','','','','',15);
/*!40000 ALTER TABLE `board` ENABLE KEYS */;
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
