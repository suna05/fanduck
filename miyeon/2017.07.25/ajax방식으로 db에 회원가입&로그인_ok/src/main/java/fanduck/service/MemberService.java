package fanduck.service;

import java.util.List;

import fanduck.domain.Member;


public interface MemberService {
  List<Member> list() throws Exception;
  Member get(int no) throws Exception;
 Member getByEmailPassword(String id, String password) throws Exception;
  int getSize() throws Exception;
  void add(Member member) throws Exception;
  void update(Member member) throws Exception;
  void remove(int no) throws Exception;
}







