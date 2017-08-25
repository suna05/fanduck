package fanduck.dao;

import java.util.List;
import java.util.Map;

import fanduck.domain.CastMember;

public interface CastMemberDao {
  List<CastMember> selectList(Map<String, Object> valueMap);
  List<CastMember> selectCast(Map<String, Object> valueMap);
  int insert(CastMember castMember);
  int delete(CastMember castMember);
  int update(CastMember castMember);
  int updatemovie(CastMember castMember);
  CastMember selectOne(Map<String,Object> valueMap);
}
