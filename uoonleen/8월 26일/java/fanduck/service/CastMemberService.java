package fanduck.service;

import java.util.List;

import fanduck.domain.CastMember;

public interface CastMemberService {
  List<CastMember> list(int mno) throws Exception;
  List<CastMember> list(int mno, String fpCode) throws Exception;
  void add(CastMember castMember) throws Exception;
  void update(CastMember castMember) throws Exception;
  void updatemovie(CastMember castMember) throws Exception;
  void remove(CastMember castMember) throws Exception;
  CastMember getByMvnoFpcode(String mvNo, String fpCode) throws Exception;
} 







