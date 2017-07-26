package fanduck.dao;

import java.util.List;
import java.util.Map;

import fanduck.domain.Member;

public interface MemberDao {
  List<Member> selectList(Map<String,Object> valueMap) ;
//  List<Member> selectListByNames(Map<String,Object> valueMap);- memberdao of 강사님에 있는 건데 teacherdao를 적용한 곳에는 없다.
  Member selectOne(int no); 
  Member selectOneByEmailPassword(Map<String,Object> valueMap);
  int insert(Member member);
  int update(Member member);
  int delete(int mno);
  void insertPhoto(Map<String,Object> valueMap);
  
  //List<String> selectPhotoList(int memberNo);
  String selectPhoto(int memberNo);
  void deletePhoto(int memberNo);
  int countAll();
  
  
}
