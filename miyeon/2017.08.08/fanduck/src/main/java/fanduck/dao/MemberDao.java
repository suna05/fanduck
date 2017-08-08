package fanduck.dao;

import java.util.List;
import java.util.Map;

import fanduck.domain.Member;

public interface MemberDao {
  List<Member> selectList(Map<String,Object> valueMap) ;
  Member selectOne(int no); 
  Member selectOneByEmailPassword(Map<String,Object> valueMap);
  Member checkId(String id);
  int insert(Member member);
  int update(Member member);
  int delete(int mno);
  void insertPhoto(Map<String,Object> valueMap);
  String selectPhoto(int memberNo);
  void deletePhoto(int memberNo);
  int countAll();
  
  
}
