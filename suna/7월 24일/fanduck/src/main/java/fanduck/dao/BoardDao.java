package fanduck.dao;

import java.util.List;
import java.util.Map;
import fanduck.domain.Board;

public interface BoardDao {
  List<Board> selectList(Map<String, Object> valueMap);
  int countAll();
  int insert(Board board);
  int delete(int bdNo);
  int update(Board board);
  
  void insertPhoto(Map<String, Object> valueMap);
  String selectPhoto(int bdNo);
  void deletePhoto(int bdNo);
  List<String> selectPhotoList(int bdNo);
}
