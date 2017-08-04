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
	public List<CastMember> list() throws Exception {
	  HashMap<String,Object> valueMap = new HashMap<>();
      return CastMemberDao.selectList(valueMap);
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
	public void remove(String fpCode) throws Exception {
	  CastMemberDao.delete(fpCode);
		
	}

	@Override
	 public CastMember getByMvnoFpcode(String mvNo, String fpCode) throws Exception {
	    HashMap<String,Object> valueMap = new HashMap<>();
	    valueMap.put("mvNo", mvNo);
	    valueMap.put("fpCode", fpCode);
	    
	    return CastMemberDao.selectOne(valueMap);
	  }

}
 






