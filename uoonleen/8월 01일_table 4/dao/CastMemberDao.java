package fanduck.dao;

import java.util.List;
import java.util.Map;

import fanduck.domain.CastMember;

public interface CastMemberDao {
  List<CastMember> selectList(Map<String, Object> valueMap);
  int insert(CastMember castMember);
  int delete(String mvNo);
  int update(CastMember castMember);
  CastMember selectOne(Map<String,Object> valueMap);
}
