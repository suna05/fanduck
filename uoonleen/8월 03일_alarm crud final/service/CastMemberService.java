package fanduck.service;

import java.util.List;

import fanduck.domain.CastMember;

public interface CastMemberService {
  List<CastMember> list() throws Exception;
  void add(CastMember castMember) throws Exception;
  void update(CastMember castMember) throws Exception;
  void remove(String fpCode) throws Exception;
  CastMember getByMvnoFpcode(String mvNo, String fpCode) throws Exception;
} 







