package fanduck.dao;

import java.sql.Connection;
import java.util.List;

import com.mysql.jdbc.PreparedStatement;

import fanduck.domain.Board;
import fanduck.util.DBConnectionPool;

public class BoardDao {
  DBConnectionPool conPool;
  
  public BoardDao(DBConnectionPool conPool) {
    this.conPool = conPool;
  }
  
  public List<Board> selectList(int pageNo, int pageSize) throws Exception {
    Connection con = conPool.getConnection();
    
    try (
        PreparedStatement stmt = con.prepareStatement(
            "select bd_no, mp_no, titl, text, rdt, mdt from board order by bd_no asc limit ?,?");
}
