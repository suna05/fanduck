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
  `MP_FILMO` varchar(400) DEFAULT NULL COMMENT '필모리스트',
  `MP_CODE` varchar(200) DEFAULT NULL COMMENT '영화인코드',
  `MP_TYPE` varchar(10) DEFAULT NULL COMMENT '유형',
  PRIMARY KEY (`MP_NO`),
  KEY `FK_MEMB_TO_MP_PRO` (`MNO`),
  CONSTRAINT `FK_MEMB_TO_MP_PRO` FOREIGN KEY (`MNO`) REFERENCES `memb` (`MNO`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COMMENT='영화인프로필';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mp_pro`
--

LOCK TABLES `mp_pro` WRITE;
/*!40000 ALTER TABLE `mp_pro` DISABLE KEYS */;
INSERT INTO `mp_pro` VALUES (3,1,'photo/1503891466654_1_200.png','김고은','‘고은’이라는 이름은 \n곱게 자라라는 의미를 가지고 있다.','계춘할망|성난 변호사|협녀, 칼의 기억|차이나타운|몬스터|은교','20125838','배우'),(5,1,'photo/1503970124258_1_200.png','이제훈','2011년 《파수꾼》과 《고지전》 두 작품으로 존재감 부각','박열|아이 캔 스피크|탐정 홍길동: 사라진 마을|파파로티|분노의 윤리학|가디언즈|점쟁이들|건축학개론|고지전|파수꾼|인플루언스|친구사이?|몰디브 환상특급|미쓰 커뮤니케이션|귀 鬼','10057349','배우'),(6,1,'photo/1503905728317_2_200.png','천우희','정말 정말 예쁘고 사랑스러운 천우희 배우 님 ♡♡','어느날|흥부|니 부모 얼굴이 보고 싶다|곡성|해어화|뷰티 인사이드|손님|출중한 여자|한공주|26년|코리아|써니|이파네마 소년|마더|뻑킹 세븐틴|생수|9월 수요단편극장 \"여배우의 힘 ','20133966','배우'),(11,1,'photo/1504160617875_2_200.png','대런','미국을 대표하는 현실주의 감독. 대표작은 <블랙스완>!','마더!|재키|노아|블랙 스완|더 레슬러|천년을 흐르는 사랑|레퀴엠|파이','20112222','감독'),(12,1,'photo/1504161491690_3_200.png','임순례','<리틀 포레스트>의 임순레 감독!\r\n우생순도 제작 :)','리틀 포레스트|글로리데이|제보자|남쪽으로 튀어|로맨스 조|소와 함께 여행하는 법|날아라 펭귄|우리 생애 최고의 순간|미소|와이키키 브라더스|아름다운 생존: 여성 영화인이 말하는 영화|세 친구|남자니까 아시잖아요?|그녀의 무게|우중산책|고양이 키스|미안해, 고마워|여섯 개의 시선','10058650','감독'),(13,1,'photo/1504161685665_4_200.png','황성구','<박열>의 황성구 작가!','박열|리틀 포레스트|찌라시: 위험한 소문|나는 왕이로소이다|간기남|특수본|식객2 : 김치전쟁|흑심모녀|파랑주의보|새드무비','10090124','시나리오'),(18,1,'photo/1504168480670_6_200.png','김효인','땐뽀걸즈!','땐뽀걸즈','20281450','배우'),(19,1,'photo/1504178058548_1_200.png','한영희','소개글을 입력해주세요.','안녕 히어로|노라노|두 개의 문|종로의 기적|레즈비언 정치도전기|3xFTM','10087658','감독'),(20,1,'photo/1504178284912_2_200.png','다니엘','다니엘 로지우 씨!','블랙 워터 뱀파이어','10009303','배우');
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

-- Dump completed on 2017-08-31 21:03:12
