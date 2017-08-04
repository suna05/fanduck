package fanduck.dao;

import java.util.List;
import java.util.Map;

import fanduck.domain.Board;

public interface BoardDao {
  List<Board> selectList(Map<String, Object> valueMap);
  Board selectOne(int bd_No); 
  
  int countAll();
  
  int insert(Board board);
  int delete(int bdNo);
  int update(Board board);
  
  //Board search(Board board);
  
  List<Board> searchListByTitle(Map<String, String> valueMap);
  
  List<Board> searchListByContent(Map<String, String> valueMap);
  
  //void insertPhoto(int no, List<String> photoList) throws Exception;
  void insertPhoto(Map<String, Object> valueMap);
//  List<String> selectPhotoList(int bdNo) throws Exception;
  List<String> selectPhotoList(int boardNo);
  //void deletePhoto(int bdNo) throws Exception;

}
