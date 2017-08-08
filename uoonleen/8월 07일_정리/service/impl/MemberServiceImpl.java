package fanduck.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fanduck.dao.MemberDao;
import fanduck.domain.Member;
import fanduck.service.MemberService;


@Service
public class MemberServiceImpl implements MemberService {
  @Autowired
  MemberDao memberDao;
  


  @Override
  public List<Member> list() throws Exception {
   HashMap<String,Object> valueMap = new HashMap<>();
    
    return memberDao.selectList(valueMap);
  }

  @Override
  public Member get(int no) throws Exception {
    return memberDao.selectOne(no);
  }

  @Override
  public int getSize() throws Exception {
    // TODO Auto-generated method stub
    return 0;
  }

  @Override
  public void add(Member member) throws Exception {
    memberDao.insert(member);
   // this.insertPhoto(teacher.getNo(), teacher.getPhotoList()); // 강사 사진 추가
  }

  @Override
  public void update(Member member) throws Exception {
     memberDao.update(member);
     System.out.println("마지막이예요");
  }

  @Override
  public void remove(int no) throws Exception {
    // TODO Auto-generated method stub
    
  }

  @Override
  public Member getByEmailPassword(String id, String password) throws Exception {
    HashMap<String,Object> valueMap = new HashMap<>();
    valueMap.put("id", id);
    valueMap.put("password", password);
    
    return memberDao.selectOneByEmailPassword(valueMap);
  }

  @Override
  public Member idCheck(String id) throws Exception {
    return memberDao.checkId(id);
  }

  
 
}
  
 








