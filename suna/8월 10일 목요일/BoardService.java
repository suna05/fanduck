package fanduck.service;

import java.util.List;
import java.util.Map;

import fanduck.domain.Board;

public interface BoardService {
  List<Board> list() throws Exception;
  Board get(int bd_No) throws Exception;
  
  int getSize() throws Exception;
  void add(Board board) throws Exception;
  //void insertPhoto(Board board) throws Exception;
  void update(Board board) throws Exception;
  void remove(int bd_No) throws Exception;
  void updatePhoto(Board board) throws Exception;
  List<Board> searchList(Map<String, String> value) throws Exception;
}







