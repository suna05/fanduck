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
  `MP_NO` int(11) NOT NULL COMMENT '영화인일련번호',
  `TITL` varchar(100) NOT NULL COMMENT '제목',
  `TEXT` varchar(5000) DEFAULT NULL COMMENT '내용',
  `RDT` date NOT NULL COMMENT '등록일',
  `photo` varchar(200) NOT NULL COMMENT '대표사진',
  `list1` varchar(200) DEFAULT NULL COMMENT '리스트1',
  `list2` varchar(200) DEFAULT NULL COMMENT '리스트2',
  `list3` varchar(200) DEFAULT NULL COMMENT '리스트3',
  `list4` varchar(200) DEFAULT NULL COMMENT '리스트4',
  `list5` varchar(200) DEFAULT NULL COMMENT '리스트5',
  `list6` varchar(200) DEFAULT NULL COMMENT '리스트6',
  `list7` varchar(200) DEFAULT NULL COMMENT '리스트7',
  `list8` varchar(200) DEFAULT NULL COMMENT '리스트8',
  `list9` varchar(200) DEFAULT NULL COMMENT '새 컬럼',
  PRIMARY KEY (`BD_NO`),
  KEY `FK_MP_PRO_TO_BOARD` (`MP_NO`),
  CONSTRAINT `FK_MP_PRO_TO_BOARD` FOREIGN KEY (`MP_NO`) REFERENCES `mp_pro` (`MP_NO`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8 COMMENT='게시판 상세';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `board`
--

LOCK TABLES `board` WRITE;
/*!40000 ALTER TABLE `board` DISABLE KEYS */;
INSERT INTO `board` VALUES (6,3,'#김고은 #성장과정','성장 과정[편집]\n김고은은 1991년 7월 2일 서울에서 1남 1녀 중 둘째로 태어났다. 오빠와는 연년생이다.[2] ‘고은’이라는 이름은 이름처럼 곱게 자라길 바라는 마음으로 그녀의 아버지가 지어준 이름이라고 한다.[3] 1994년 김고은이 4살이 되던 해 중국에서 사업을 하는 아버지를 따라 가족이 중국으로 이동하면서 그 곳에서 14세때까지 10년간 살다가 중학교 1학년 때 귀국했다.[4] 그녀는 베이징에서 5년, 베이징에서 차로 1시간 30분가량 떨어진 도시에서 5년을 보냈고, 조기 교육으로 인해 중국어와 중국문화, 정서에 익숙하다.[5] 이 영향으로 중국어에도 매우 능통하다고 한다. 김고은의 중국어 실력은 지난 2014년 홍콩에서 열린 아시안 필름 어워즈에서 홍콩의 인기 배우 겸 프로듀서 임가동과 함께 시상자로 나서 꽤 긴 시간 중국어로 대화를 나누며 수상자에게 상을 건네는 모습을 통해 알려졌다.[6]\n\n김고은은 영화광인 아버지의 영향으로 어려서부터 많은 영화를 접하며 자라 영화에 관심이 많았다. 그녀는 미래에 영화 스태프나 시나리오 작가가 되고 싶다는 꿈을 안고 계원예술고등학교에 진학했다.[7] 그러나 예고 재학 중 선생님의 권유로 연극에 출연한 이후 연기에 관심을 갖게 되면서 2010년 한국예술종합학교 연극원 연기과에 입학했다.[8][9]','2017-08-28','1503891478968','1503891482099_1','1503891484336_1','1503891486609_1','1503891491535_1','','1503891497107_1','1503891712663_1','1503891716683_1','1503891720218_1'),(8,3,'#김고은 #화보','최근 드라마 \'도깨비\'에서 지은탁 역할로 한국뿐 아니라 아시아 등지에서 사랑 받은 김고은은 드라마가 끝나고 모처럼 휴식기를 가진 뒤라 한층 얼굴이 투명하고 화사했다.\n\n공개된 \'엘르\' 화보 속 김고은은 봄의 기운이 물씬 풍기는 스타일링을 특유의 매력적인 눈웃음과 자연스러운 포즈로 완벽하게 소화했다.\n\n화보 촬영 뒤 이어진 인터뷰에서 여성으로서의 아름다움에 대한 생각을 묻는 질문에 “제가 제 자신에게 바라는 게 하나 있는데, 언제나 마음이 건강한 사람이면 좋겠다는 거예요. 의외로 지키기 힘들거든요. 눈으로 보이는 외형적인 모습도 아름다우면 정말 좋겠지만, 어떤 아름다움의 기준을 정해 놓고 그것에 저를 끼워 맞추려 든다면 스스로 피폐해질 것 같아요. 제 개성과 자꾸 부딪힐 테니까요. 저는 저마다 가진 아름다움이 제각각 다르다고 믿어요.”라고 대답했다.\n\n이어 김고은은 여자라서 행복한 순간에 대해 “여자는 존재 자체가 아름다워요. 나이마다 가진 아름다움이 정말 뚜렷한 것 같아요. 돌을 채취해 그걸 깎고 또 깎아서 빛나는 보석으로 만드는 것처럼, 여자로 태어나 나이 들어가는 모든 과정이 아름다운 것 같아요”라고 대답해 한 사람의 배우로서, 여자로서의 삶에 대한 만족감을 드러냈다','2017-08-28','1503907746403','1504081499496_1','1504083189145_3','1504083242275_2','1504083544472_2','1504178180163_1','1504083197194_1','1504083199174_1','1504083202600_1','1504083205699_1'),(9,3,'#김고은 #엘르 #화보','','2017-08-28','1503908356154','1503908359789_1','1503908361803_1','1503908363680_1','1503908365956_1','1503908368069_1','1503908370265_1','1503908372570_1','1503908374380_1','1503908376594_1'),(10,3,'#김고은 #경력','2012: 은교와 영화에서 주목\n김고은은 한국예술종합학교 연극원에 진학하고,[10] 이듬해 여름 동문회 회장의 권유로 영화 《은교》 오디션을 보게 되었다. 정지우 감독은 오디션을 통해 300여 명이 넘는 은교 후보를 만났고, 본인이 상상했던 은교의 이미지와 거의 일치하는 김고은을 캐스팅했다.[11] 이 작품은 소설가 박범신의 동명 베스트셀러 소설을 각색한 영화로 국민의 존경을 한 몸에 받는 70대 원로시인 이적요(박해일 분)와 애제자 서지우(김무열 분)가 어린 아이처럼 천진난만한 웃음과 묘한 관능미를 지닌 17세 여고생 은교를 사이에 놓고 첨예한 갈등에 빠진다는 내용의 치정 멜로극으로 김고은은 타이틀롤 여주인공 한은교 역을 연기하며, 극중 파격적인 정사신으로 주목 받았다.[12][13] 《은교》 제작보고회에서 정지우 감독은 김고은에 대해 “김고은은 긴 시간을 거쳐 오디션을 봤다. 겉으로 드러나는 매력 외에 본질적으로 호기심이 많은 사람이라 끌렸다. 은교가 노시인과 그의 제자에게 호기심을 느끼면서 이야기가 시작된다. 김고은은 호기심이 많은 동시에 내면에 단단함과 중심을 갖고 있는 사람이고, 이는 어리지만 휩쓸리지 않고 대상화되지 않으면서 자신의 감정을 유지할 수 있는 사람”이라며 “은교에 어울리는 배우”라고 평했다.[14] 영화가 개봉 된 이후, 스포츠서울의 김가연 기자는 “김고은은 소설 속 은교를 완벽하게 재현한 듯 풋풋하고 싱그럽다.”며 “괴물 신인의 등장이라고 할만 하다.”고 평하였고,[15] 한국일보의 라제기 기자는 “순수와 농염을 오가며 두 남자의 마음을 뒤흔드는 김고은의 빼어난 연기로 소설 속 은교는 스크린에서 실존을 얻는다. 대형 배우로 성장하리란 예감이 든다.”고 평하였다.[16] 그녀는 이 작품으로 2012년 제49회 대종상영화제 여우주연상, 신인여우상 후보에 올라[17] 신인여우상을 수상했다.[18] 이외에도 제21회 부일영화상, 제32회 한국영화평론가협회상, 제13회 부산영화평론가협회상, 제33회 청룡영화상, 제4회 올해의 영화상 등 다수의 영화제에서 신인여우상을 휩쓸었다.[19][20]\n\n2013-2015: 휴식 및 차이나타운[편집]\n《은교》의 성공에도 불구하고 김고은은 학교로 돌아가 복학을 선택했고, 다시 동기들과 함께 연극 공연을 하고 단편 영화를 찍는 등 휴식을 취하며 2년간의 공백기를 갖게 되었고,[21] 《은교》 촬영 전 찍은 독립영화 《네버다이 버터플라이》가 2013년에 개봉하였다.[22] 2014년 영화 《몬스터》로 2년만에 복귀한 김고은은 잠깐의 공백기를 두고 “특별한 이유는 없었다”고 말하며, “제일 중요하게 생각하는 게 딱 하나 있는데 연기할 때 즐기면서 하자는 것이다. \'은교\' 때는 힘들었던 기억이 안 났다. 마냥 행복하게 즐기면서 했는데 \'은교\'가 끝나고 \'아, 지금은 안 되겠다\'는 생각이 들었다”고 설명했다. 복귀작인 범죄 스릴러 영화 《몬스터》에서 김고은은 극중 연쇄 살인마 태수(이민기 분)를 쫓는 약간은 지능이 모자란 복순이로 분해 연기 변신을 했다.[23][24]\n\n2015년, 김고은은 영화 《차이나타운》에 김혜수, 엄태구, 박보검와 함께 캐스팅 되었다. 그녀는 태어나자마자 지하철 보관함 10호에 버려져 차이나타운의 실질적 지배자이자 모두에게 ‘엄마’라 불리는 보스(김혜수 분)에 의해 범죄조직의 일원으로 길러지는 일영 역을 맡았다.[25] 이 작품은 제 54회 칸 국제영화제 비평가주간 공식 스크리닝에 초청을 받아 김고은은 칸 레드카펫을 처음 밟았다.[26][27] 다음 작품으로 같은 해 개봉 된 사극 무협 영화 《협녀, 칼의 기억》에서 그녀의 롤 모델로 꼽아왔던 전도연과 공연하였다.[28] 고려 말, 왕을 꿈꿨던 한 남자의 배신 그리고 18년 후 그를 겨눈 두 개의 칼로 뜻이 달랐던 세 검객의 피할 수 없는 숙명을 그린 이 영화에서 김고은은 극중 부모의 원수를 갚아야 하는 숙명을 타고난 아이이자 월소(전도연 분)를 어머니라 부르는 홍이 역을 맡아  촬영 시작 6개월 전부터 액션스쿨에서 연습으로 만들어낸 고난위도의 경공술과 검술 액션 등도 선보였다.[29] 영화는 부진한 성적을 거두며 흥행에 참패했다.[30] 이후 출연한 영화 《성난 변호사》에서는 신입 검사 진선민 역을 맡아 이선균과 공연하였다.[31]\n\n2016-현재: 텔레비전 데뷔, 성공[편집]\n\n2016년 6월 3일, 백상예술대상 시상식에서 수상소감 말하는 김고은.\n김고은은 2015년 7월 동명의 인기 웹툰을 원작으로 한 tvN 드라마 《치즈인더트랩》에서 여주인공 홍설 역으로 캐스팅 되어 드라마에 첫 출연하는 것이 발표 되었다.[32] 이 작품은 2016년 1월 4일부터 3월 1일까지 인기리에 방영 되었고, 김고은은 자신만의 홍설을 탄생시켜 큰 호평을 받으며 제52회 백상예술대상 TV부문 여자 신인연기상을 수상했다.[33][34] 김고은은 윤여정과 공연하여 지난 2015년에 촬영한 영화 《계춘할망》이 2016년 5월에 개봉 되었다. 이 작품에서 그녀는 12년 만에 집에 돌아온 예측불가 불량 손녀 혜지 역을 맡아 오매불망 손녀 바라기 해녀 할망(윤여정 분)과 할머니와 손녀로 만나 세대를 뛰어넘는 호흡을 선보였다.[35] 특히 김고은은 영화 마지막 부분의 엔딩크레딧에서 영화의 삽입된 노래를 직접 불러 화제를 모았다.[36]\n\n김고은은 이후 김은숙 작가의 차기작으로 큰 화제를 모은 tvN 드라마 《도깨비》에서 여주인공 지은탁 역에 캐스팅 되어 공유와 호흡을 맞췄다.[37] 이 드라마에서 김고은은 슬픈 운명을 타고난데다 불우한 환경 속에서 자랐지만 밝고 쾌활한 성격으로 주변을 밝히는 긍정형 캐릭터 지은탁 역을 맡아 도깨비 김신(공유 분)의 가슴에 꽂힌 검을 뽑아야 하는 운명을 타고 태어난 도깨비 신부를 연기했다.[38] 2016년 12월 2일부터 2017년 1월 21일까지 방영 내내 이슈를 모으며 최고 시청률이 20.5%(닐슨유료플랫폼 기준)을 기록하는 등 큰 인기를 얻었다.[39]','2017-08-28','1503908391371','1503908417419_2','1503908419936_2','1503908422191_2','','1503908424789_2','','1503908429105_2','1503908426856_2','1503908432058_2'),(11,3,'#김고은 #나무위키 #생일','김고은(金高銀[1], Kim Go-eun)\n출생\n1991년 7월 2일 (26세), 서울특별시\n신체\n167cm, 48kg, B형\n성좌/지지\n게자리/양띠\n학력\n계원예술고등학교\n한국예술종합학교 연극원\n가족\n부모님, 1남1녀 중 막내\n종교\n개신교[2]\n데뷔\n2012년 영화 \'은교\'\n소속사\nBH 엔터테인먼트','2017-08-28','1503919951536','','1503919957523_1','','','','','','',''),(12,5,'1','fffffffffffffffffffffffff','2017-08-29','1503970109677','','','','','','','','',''),(13,3,'#김고은 #치즈인더트랩','등장 인물\n주요 인물\n박해진 : 유정 역 (아역 : 박민상)\n김고은 : 홍설 역\n서강준 : 백인호 역 (아역 : 유제건)\n이성경 : 백인하 역 (아역 : 이나윤)\n남주혁 : 권은택 역\n박민지 : 장보라 역\n\n회차	방송일자	TNMS 시청률	AGB 닐슨 시청률\n1화	2016년 1월 4일	2.6%	3.597%\n2화	2016년 1월 5일	2.9%	4.839%\n3화	2016년 1월 11일	5.8%	5.222%\n4화	2016년 1월 12일	5.7%	5.687%\n5화	2016년 1월 18일	6.2%	6.490%\n6화	2016년 1월 19일	6.6%	6.271%\n7화	2016년 1월 25일	7.0%	6.030%\n8화	2016년 1월 26일	7.1%	6.750%\n9화	2016년 2월 1일	7.2%	7.102%\n10화	2016년 2월 2일	7.6%	6.545%\n11화	2016년 2월 15일	7.3%	5.598%\n12화	2016년 2월 16일	7.2%	5.844%\n13화	2016년 2월 22일	6.9%	6.169%\n14화	2016년 2월 23일	7.2%	6.487%\n15화	2016년 2월 29일	6.4%	5.875%\n16화	2016년 3월 1일	7.5%	6.889%','2017-08-29','1504005227312','','','','','','','','',''),(15,3,'#김고은 #화보','','2017-08-30','1504083090111','','','','','','','','',''),(16,3,'#김고은 #화보','','2017-08-30','1504083111879','','','','','','','','',''),(17,3,'#김고은 #화보 #괌','','2017-08-30','1504083135180','','','','','','','','',''),(20,3,'eeeee','eeee','2017-08-31','1504147211542_2',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(22,19,'한영희 감독님!','우와아','2017-08-31','1504178091704_1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(23,20,'제목','','2017-08-31','1504178320537','1504178330618_1','1504178333293_1','1504178337702_1','','','','','','');
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

-- Dump completed on 2017-08-31 21:03:12
