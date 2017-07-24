package fanduck.dao;

import java.util.List;
import java.util.Map;

import fanduck.domain.Member;

public interface MemberDao {
  List<Member> selectList(Map<String,Object> valueMap) ;
  //Member selectOneByEmailPassword(Map<String,Object> valueMap);
  int countAll();
  int insert(Member member);
  int delete(int mno);
  int update(Member member);
 
  void insertPhoto(Map<String,Object> valueMap);
  String selectPhoto(int memberNo);
  void deletePhoto(int memberNo);
  
  
  List<String> selectPhotoList(int memberNo);
}
