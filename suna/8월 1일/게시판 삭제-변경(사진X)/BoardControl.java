package fanduck.control.json;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.servlet.ServletContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import fanduck.domain.Board;
import fanduck.service.BoardService;
import net.coobird.thumbnailator.Thumbnails;

@RestController
@RequestMapping("/web/board/")
public class BoardControl {

  @Autowired ServletContext ctx;
  @Autowired BoardService boardService;
/*  private int bdNo;*/

  @RequestMapping("list")
  public JsonResult detail() throws Exception {

    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("list", boardService.list());
    System.out.println(dataMap);
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
  
  @RequestMapping("add")
  public JsonResult add(Board board) throws Exception {
    boardService.add(board);
    return new JsonResult(JsonResult.SUCCESS, "ok");
  }  
  
  
  
  @RequestMapping("detail")
  public JsonResult service(int bdNo) throws Exception {
    Board board = boardService.get(bdNo);
    
    if (board == null) {
      return new JsonResult(JsonResult.FAIL, bdNo + "번 게시물이 없습니다.");      
    }
    
    return new JsonResult(JsonResult.SUCCESS, board);
  }

  
  
  @RequestMapping("update")
  public JsonResult update(Board board) throws Exception {
    boardService.update(board);
    
    return new JsonResult(JsonResult.SUCCESS, "update 완료");
  }

  
  
//  @RequestMapping("delete")
//  public String delete(int bd_No) throws Exception {
//    boardService.remove(bd_No);
//    
//    return "redirect:board.html";
//  }
//  
  
  @RequestMapping("delete")
  public JsonResult delete(int bd_No) throws Exception {
    boardService.remove(bd_No);
    return new JsonResult(JsonResult.SUCCESS, "ok");
  }  
  
  
  
  @RequestMapping(path="upload")
  public Object upload(MultipartFile[] files) throws Exception {
    
    ArrayList<Object> fileList = new ArrayList<>();
    
    for (int i = 0; i < files.length; i++) {
      if (files[i].isEmpty()) 
        continue;
      
      String newFilename = this.getNewFilename();
      File file = new File(ctx.getRealPath("/web/" + newFilename));
      files[i].transferTo(file);
      
      File thumbnail = new File(ctx.getRealPath("/web/board/photo/" + newFilename + "_400"));
      Thumbnails.of(file).size(400, 400).outputFormat("png").toFile(thumbnail); 

     /* thumbnail = new File(ctx.getRealPath("/upload/" + newFilename + "_140"));
      Thumbnails.of(file).size(140, 140).outputFormat("png").toFile(thumbnail);
      
      thumbnail = new File(ctx.getRealPath("/upload/" + newFilename + "_200"));
      Thumbnails.of(file).size(200, 200).outputFormat("png").toFile(thumbnail);*/
        
      HashMap<String,Object> fileMap = new HashMap<>();
      fileMap.put("filename", newFilename);
      fileMap.put("filesize", files[i].getSize());
      fileList.add(fileMap);
    }
    
    HashMap<String,Object> resultMap = new HashMap<>();
    resultMap.put("fileList", fileList);
    return resultMap;
  }
  
  int count = 0;
  
  synchronized private String getNewFilename() {
    if (count > 100) {
      count = 0;
    }
    return String.format("%d_%d", System.currentTimeMillis(), ++count); 
  }
  
}









