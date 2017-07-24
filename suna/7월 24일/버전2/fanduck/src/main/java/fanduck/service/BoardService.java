package fanduck.service;

import java.util.List;
import fanduck.domain.Board;

public interface BoardService {
  List<Board> list() throws Exception;
  Board get(int no) throws Exception;
  int getSize() throws Exception;
  void add(Board board) throws Exception;
  void update(Board board) throws Exception;
  void remove(Board board) throws Exception;
}







