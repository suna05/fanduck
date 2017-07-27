package fanduck.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fanduck.dao.BoardDao;
import fanduck.domain.Board;
import fanduck.service.BoardService;

@Service
public class BoardServiceImpl implements BoardService {
	
  @Autowired
  BoardDao boardDao;

  public List<Board> list() throws Exception {
    HashMap<String,Object> valueMap = new HashMap<>();
    
    return boardDao.selectList(valueMap);
  }

  @Override
  public Board get(int no) throws Exception {
    // TODO Auto-generated method stub
    return null;
  }

  @Override
  public int getSize() throws Exception {
    // TODO Auto-generated method stub
    return 0;
  }




  @Override
  public void update(Board board) throws Exception {
    // TODO Auto-generated method stub
    
  }


  @Override
  public void add(Board board) throws Exception {
   boardDao.insert(board);
    
  }

  @Override
  public void remove(int no) throws Exception {
    // TODO Auto-generated method stub
    
  }

  

}







