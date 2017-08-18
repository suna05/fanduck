package fanduck.control.json;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import fanduck.domain.Board;
import fanduck.service.BoardService;
import net.coobird.thumbnailator.Thumbnails;

@RestController
@RequestMapping("/board/")
public class BoardControl {

  @Autowired ServletContext ctx;
  @Autowired BoardService boardService;

  @RequestMapping("list")
  public JsonResult list(@RequestParam(value="mpNo") int mpNo) throws Exception {
    System.out.println("mpNo를 추가합니다! " + mpNo);
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("list", boardService.list(mpNo));
    System.out.println(dataMap);
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
  //,@RequestParam(value="mpNo") int mpNo
  /*
  @RequestMapping("add")
  public JsonResult add(Board board, String filenames,@RequestParam(value="mpNo") int mpNo) throws Exception {
    System.out.println("지금 mpNo:  " + mpNo);
    
    String[] nameList = filenames.split(",");
    ArrayList<String> photoList = new ArrayList<>();
    for (String name : nameList) {
      photoList.add(name);
    }   
    
    board.setPhotoList(photoList);
    
    
    boardService.add(board);
    return new JsonResult(JsonResult.SUCCESS, "ok");
  }  
  */

  @RequestMapping("add")
  public JsonResult add(Board board, @RequestParam(value="mpNo") int mpNo) throws Exception {

    boardService.add(board);
    return new JsonResult(JsonResult.SUCCESS, "ok");
  }  
  
  
  
  
  
  @RequestMapping("delete")
  public JsonResult delete(int bdNo) throws Exception {
    boardService.remove(bdNo);
    return new JsonResult(JsonResult.SUCCESS, "ok");
  }  
  
  
  @RequestMapping("searchList")
  public JsonResult searchList(@RequestParam Map<String, String> value) throws Exception {
    HashMap<String, Object> dataMap = new HashMap<>();

    dataMap.put("searchList", boardService.searchList(value));
    return new JsonResult(JsonResult.SUCCESS, dataMap);
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
  public JsonResult update(Board board, String filenames) throws Exception {
    String[] nameList = filenames.split(",");
    ArrayList<String> photoList = new ArrayList<>();
    for (String name : nameList) {
      photoList.add(name);
    }   
    
    board.setPhotoList(photoList);
    boardService.updatePhoto(board);
    boardService.update(board);
    
    return new JsonResult(JsonResult.SUCCESS, "update 완료");
  }

  
  

  
  
 
  @RequestMapping(path="upload")
  public HashMap<String, Object> upload(MultipartFile[] files) throws Exception {
    
    ArrayList<Object> fileList = new ArrayList<>();
    
    for (int i = 0; i < files.length; i++) {
      if (files[i].isEmpty()) 
        break;
      
      String newFilename = this.getNewFilename();
      File file = new File(ctx.getRealPath("/web/" + newFilename));
      files[i].transferTo(file);
      fileList.add(newFilename);
      
      //System.out.printf("fileList: %s",fileList);
      //System.out.printf("newFilename: %s",newFilename);
      File thumbnail = new File(ctx.getRealPath("/upload/" + newFilename));
      Thumbnails.of(file).size(400, 400).outputFormat("png").toFile(thumbnail); 

      HashMap<String,Object> fileMap = new HashMap<>();
      fileMap.put("filename", newFilename);
      fileMap.put("filesize", files[i].getSize());
      fileMap.put("filepath","/upload/" + newFilename + ".png" );
      //fileList.add(fileMap);
      System.out.println(fileMap);
      //System.out.println();
      System.out.println(files[i].getOriginalFilename());
    }
    
    HashMap<String, Object> resultMap = new HashMap<>();
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
  
  
  
  
  
  @RequestMapping(path="upload2")
  public HashMap<String, Object> upload2(MultipartFile[] files) throws Exception {
    
    ArrayList<Object> fileList2 = new ArrayList<>();
    
    for (int i = 0; i < files.length; i++) {
      if (files[i].isEmpty()) 
        break;
      
      String newFile= this.getNewFile();
      File file = new File(ctx.getRealPath("/web/" + newFile));
      files[i].transferTo(file);
      fileList2.add(newFile);
      
      System.out.printf("fileList: %s",fileList2);
      System.out.printf("newFilename: %s",newFile);
      File thumbnail = new File(ctx.getRealPath("/upload/" + newFile));
      Thumbnails.of(file).size(400, 400).outputFormat("png").toFile(thumbnail); 

      HashMap<String,Object> fileMap = new HashMap<>();
      fileMap.put("filename", newFile);
      fileMap.put("filesize", files[i].getSize());
      fileMap.put("filepath","/upload/" + newFile + ".png" );
      //fileList.add(fileMap);
      System.out.println(fileMap);
      System.out.println(files[i].getOriginalFilename());
    }
    
    HashMap<String, Object> resultMap = new HashMap<>();
    resultMap.put("fileList2", fileList2);
    return resultMap;
  }
  
  int cout = 0;
  
  synchronized private String getNewFile() {
    if (count > 100) {
      count = 0;
    }
    return String.format("%d_%d", System.currentTimeMillis(), ++cout); 
  }
  
  
  
  
  @RequestMapping(path="list1")
  public HashMap<String, Object> list1(MultipartFile[] files) throws Exception {
    
    ArrayList<Object> list1 = new ArrayList<>();
    
    for (int i = 0; i < files.length; i++) {
      if (files[i].isEmpty()) 
        break;
      
      String newFile1= this.getNewFile1();
      File file = new File(ctx.getRealPath("/web/board/photo/" + newFile1));
      files[i].transferTo(file);
      list1.add(newFile1);
      
      System.out.printf("fileList1: %s",list1);
      System.out.printf("newFilename1: %s",newFile1);
      File thumbnail = new File(ctx.getRealPath("/web/board/photo/" + newFile1));
      Thumbnails.of(file).size(200, 200).outputFormat("png").toFile(thumbnail); 

      HashMap<String,Object> fileMap = new HashMap<>();
      fileMap.put("filename", newFile1);
      fileMap.put("filesize", files[i].getSize());
      fileMap.put("filepath","/web/board/photo/" + newFile1 + ".png" );
      //fileList.add(fileMap);
      System.out.println(fileMap);
    }
    
    HashMap<String, Object> resultMap = new HashMap<>();
    resultMap.put("list1", list1);
    return resultMap;
  }
  
  int l1 = 0;
  
  synchronized private String getNewFile1() {
    if (count > 100) {
      count = 0;
    }
    return String.format("%d_%d", System.currentTimeMillis(), ++l1); 
  }
  
  
  
  
}













