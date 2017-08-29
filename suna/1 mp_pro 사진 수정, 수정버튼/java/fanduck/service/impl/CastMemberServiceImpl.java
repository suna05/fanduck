package fanduck.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fanduck.dao.CastMemberDao;
import fanduck.domain.CastMember;
import fanduck.service.CastMemberService;

@Service
public class CastMemberServiceImpl implements CastMemberService {
	
  @Autowired
  CastMemberDao CastMemberDao;
  
	@Override
	public List<CastMember> list(int mno) throws Exception {
	  System.out.println("CastMemberServiceImpl의 mno : " + mno );
	  HashMap<String,Object> valueMap = new HashMap<>();
	  valueMap.put("mno", mno);
      return CastMemberDao.selectList(valueMap);
	}
	
	@Override
	public List<CastMember> list(int mno, String fpCode) throws Exception {
	  HashMap<String,Object> valueMap = new HashMap<>();
	  valueMap.put("mno", mno);
	  valueMap.put("fpCode", fpCode);
      return CastMemberDao.selectCast(valueMap);
	}

	@Override
	public void add(CastMember CastMember) throws Exception {
	  CastMemberDao.insert(CastMember);
	}

	@Override
	public void update(CastMember CastMember) throws Exception {
	  CastMemberDao.update(CastMember);
	}
	
	@Override
	public void updatemovie(CastMember CastMember) throws Exception {
	  CastMemberDao.updatemovie(CastMember);
	}

	@Override
	public void remove(CastMember CastMember) throws Exception {
	  CastMemberDao.delete(CastMember);
		
	}

	@Override
	 public CastMember getByMvnoFpcode(String mvNo, String fpCode) throws Exception {
	    HashMap<String,Object> valueMap = new HashMap<>();
	    valueMap.put("mvNo", mvNo);
	    valueMap.put("fpCode", fpCode);
	    
	    return CastMemberDao.selectOne(valueMap);
	  }

}
 






