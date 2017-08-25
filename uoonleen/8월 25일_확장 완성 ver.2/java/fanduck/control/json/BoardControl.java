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
    boardService.update(board);
    
    return new JsonResult(JsonResult.SUCCESS, "update 완료");
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
      fileMap.put("filepath","/upload/" + newFile + ".png");
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
    if (cout > 100) {
      cout = 0;
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
      Thumbnails.of(file).size(400, 400).outputFormat("png").toFile(thumbnail); 

      HashMap<String,Object> fileMap = new HashMap<>();
      fileMap.put("filename", newFile1);
      fileMap.put("filesize", files[i].getSize());
      fileMap.put("filepath","/web/board/photo/" + newFile1 + ".png");
      //fileList.add(fileMap);
      System.out.println(fileMap);
    }
    
    HashMap<String, Object> resultMap = new HashMap<>();
    resultMap.put("list1", list1);
    return resultMap;
  }
  
  int l1 = 0;
  int cout1 = 0;
  
  synchronized private String getNewFile1() {
    if (cout1 > 100) {
      cout1 = 0;
    }
    return String.format("%d_%d", System.currentTimeMillis(), ++l1); 
  }
  
  




///////List2

@RequestMapping(path="list2")
public HashMap<String, Object> list2(MultipartFile[] files) throws Exception {
  
  ArrayList<Object> list2 = new ArrayList<>();
  
  for (int i = 0; i < files.length; i++) {
    if (files[i].isEmpty()) 
      break;
    
    String newFile2= this.getNewFile2();
    File file = new File(ctx.getRealPath("/web/board/photo/" + newFile2));
    files[i].transferTo(file);
    list2.add(newFile2);
    
    System.out.printf("fileList2: %s",list2);
    System.out.printf("newFilename2: %s",newFile2);
    File thumbnail = new File(ctx.getRealPath("/web/board/photo/" + newFile2));
    Thumbnails.of(file).size(400, 400).outputFormat("png").toFile(thumbnail); 

    HashMap<String,Object> fileMap = new HashMap<>();
    fileMap.put("filename", newFile2);
    fileMap.put("filesize", files[i].getSize());
    fileMap.put("filepath","/web/board/photo/" + newFile2+ ".png" );
    //fileList.add(fileMap);
    System.out.println(fileMap);
  }
  
  HashMap<String, Object> resultMap = new HashMap<>();
  resultMap.put("list2", list2);
  return resultMap;
}

int l2 = 0;

int count2 = 0;

synchronized private String getNewFile2() {
  if (count2 > 100) {
    count2 = 0;
  }
  return String.format("%d_%d", System.currentTimeMillis(), ++l2); 
}





//////List3

@RequestMapping(path="list3")
public HashMap<String, Object> list3(MultipartFile[] files) throws Exception {
  
  ArrayList<Object> list3 = new ArrayList<>();
  
  for (int i = 0; i < files.length; i++) {
    if (files[i].isEmpty()) 
      break;
    
    String newFile3= this.getNewFile3();
    File file = new File(ctx.getRealPath("/web/board/photo/" + newFile3));
    files[i].transferTo(file);
    list3.add(newFile3);
    
    System.out.printf("fileList2: %s",list3);
    System.out.printf("newFilename2: %s",newFile3);
    File thumbnail = new File(ctx.getRealPath("/web/board/photo/" + newFile3));
    Thumbnails.of(file).size(400, 400).outputFormat("png").toFile(thumbnail); 

    HashMap<String,Object> fileMap = new HashMap<>();
    fileMap.put("filename", newFile3);
    fileMap.put("filesize", files[i].getSize());
    fileMap.put("filepath","/web/board/photo/" + newFile3 + ".png" );
    //fileList.add(fileMap);
    System.out.println(fileMap);
  }
  
  HashMap<String, Object> resultMap = new HashMap<>();
  resultMap.put("list3", list3);
  return resultMap;
}

int l3 = 0;

int count3 = 0;

synchronized private String getNewFile3() {
  if (count3 > 100) {
    count3 = 0;
  }
  return String.format("%d_%d", System.currentTimeMillis(), ++l3); 
}

////////////////List4
@RequestMapping(path="list4")
public HashMap<String, Object> list4(MultipartFile[] files) throws Exception {
  
  ArrayList<Object> list4 = new ArrayList<>();
  
  for (int i = 0; i < files.length; i++) {
    if (files[i].isEmpty()) 
      break;
    
    String newFile4= this.getNewFile4();
    File file = new File(ctx.getRealPath("/web/board/photo/" + newFile4));
    files[i].transferTo(file);
    list4.add(newFile4);
    
    System.out.printf("fileList4: %s",list4);
    System.out.printf("newFilename4: %s",newFile4);
    File thumbnail = new File(ctx.getRealPath("/web/board/photo/" + newFile4));
    Thumbnails.of(file).size(400, 400).outputFormat("png").toFile(thumbnail); 

    HashMap<String,Object> fileMap = new HashMap<>();
    fileMap.put("filename", newFile4);
    fileMap.put("filesize", files[i].getSize());
    fileMap.put("filepath","/web/board/photo/" + newFile4 + ".png" );
    //fileList.add(fileMap);
    System.out.println(fileMap);
  }
  
  HashMap<String, Object> resultMap = new HashMap<>();
  resultMap.put("list4", list4);
  return resultMap;
}

int l4 = 0;
int count4 = 0;

synchronized private String getNewFile4() {
  if (count4 > 100) {
    count4 = 0;
  }
  return String.format("%d_%d", System.currentTimeMillis(), ++l4); 
}


/////////////List5

@RequestMapping(path="list5")
public HashMap<String, Object> list5(MultipartFile[] files) throws Exception {
  
  ArrayList<Object> list5 = new ArrayList<>();
  
  for (int i = 0; i < files.length; i++) {
    if (files[i].isEmpty()) 
      break;
    
    String newFile5= this.getNewFile1();
    File file = new File(ctx.getRealPath("/web/board/photo/" + newFile5));
    files[i].transferTo(file);
    list5.add(newFile5);
    
    System.out.printf("fileList1: %s",list5);
    System.out.printf("newFilename1: %s",newFile5);
    File thumbnail = new File(ctx.getRealPath("/web/board/photo/" + newFile5));
    Thumbnails.of(file).size(400, 400).outputFormat("png").toFile(thumbnail); 

    HashMap<String,Object> fileMap = new HashMap<>();
    fileMap.put("filename", newFile5);
    fileMap.put("filesize", files[i].getSize());
    fileMap.put("filepath","/web/board/photo/" + newFile5 + ".png" );
    //fileList.add(fileMap);
    System.out.println(fileMap);
  }
  
  HashMap<String, Object> resultMap = new HashMap<>();
  resultMap.put("list5", list5);
  return resultMap;
}

int l5 = 0;
int count5 = 0;

synchronized private String getNewFile5() {
  if (count5 > 100) {
    count5 = 0;
  }
  return String.format("%d_%d", System.currentTimeMillis(), ++l5); 
}



////////List6
@RequestMapping(path="list6")
public HashMap<String, Object> list6(MultipartFile[] files) throws Exception {
  
  ArrayList<Object> list6 = new ArrayList<>();
  
  for (int i = 0; i < files.length; i++) {
    if (files[i].isEmpty()) 
      break;
    
    String newFile6= this.getNewFile1();
    File file = new File(ctx.getRealPath("/web/board/photo/" + newFile6));
    files[i].transferTo(file);
    list6.add(newFile6);
    
    System.out.printf("fileList1: %s",list6);
    System.out.printf("newFilename1: %s",newFile6);
    File thumbnail = new File(ctx.getRealPath("/web/board/photo/" + newFile6));
    Thumbnails.of(file).size(400, 400).outputFormat("png").toFile(thumbnail); 

    HashMap<String,Object> fileMap = new HashMap<>();
    fileMap.put("filename", newFile6);
    fileMap.put("filesize", files[i].getSize());
    fileMap.put("filepath","/web/board/photo/" + newFile6 + ".png" );
    //fileList.add(fileMap);
    System.out.println(fileMap);
  }
  
  HashMap<String, Object> resultMap = new HashMap<>();
  resultMap.put("list6", list6);
  return resultMap;
}

int l6 = 0;
int count6 = 0;
synchronized private String getNewFile6() {
  if (count6 > 100) {
    count6 = 0;
  }
  return String.format("%d_%d", System.currentTimeMillis(), ++l6); 
}



/////////////////////List7
@RequestMapping(path="list7")
public HashMap<String, Object> list7(MultipartFile[] files) throws Exception {
  
  ArrayList<Object> list7 = new ArrayList<>();
  
  for (int i = 0; i < files.length; i++) {
    if (files[i].isEmpty()) 
      break;
    
    String newFile7= this.getNewFile7();
    File file = new File(ctx.getRealPath("/web/board/photo/" + newFile7));
    files[i].transferTo(file);
    list7.add(newFile7);
    
    System.out.printf("fileList7: %s",list7);
    System.out.printf("newFilename1: %s",newFile7);
    File thumbnail = new File(ctx.getRealPath("/web/board/photo/" + newFile7));
    Thumbnails.of(file).size(400, 400).outputFormat("png").toFile(thumbnail); 

    HashMap<String,Object> fileMap = new HashMap<>();
    fileMap.put("filename", newFile7);
    fileMap.put("filesize", files[i].getSize());
    fileMap.put("filepath","/web/board/photo/" + newFile7 + ".png" );
    //fileList.add(fileMap);
    System.out.println(fileMap);
  }
  
  HashMap<String, Object> resultMap = new HashMap<>();
  resultMap.put("list7", list7);
  return resultMap;
}

int l7 = 0;
int count7 = 0;
synchronized private String getNewFile7() {
  if (count7 > 100) {
    count7 = 0;
  }
  return String.format("%d_%d", System.currentTimeMillis(), ++l7); 
}



////////////////////////////List8
@RequestMapping(path="list8")
public HashMap<String, Object> list8(MultipartFile[] files) throws Exception {
  
  ArrayList<Object> list8 = new ArrayList<>();
  
  for (int i = 0; i < files.length; i++) {
    if (files[i].isEmpty()) 
      break;
    
    String newFile8= this.getNewFile8();
    File file = new File(ctx.getRealPath("/web/board/photo/" + newFile8));
    files[i].transferTo(file);
    list8.add(newFile8);
    
    System.out.printf("fileList8: %s",list8);
    System.out.printf("newFilename8: %s",newFile8);
    File thumbnail = new File(ctx.getRealPath("/web/board/photo/" + newFile8));
    Thumbnails.of(file).size(400, 400).outputFormat("png").toFile(thumbnail); 

    HashMap<String,Object> fileMap = new HashMap<>();
    fileMap.put("filename", newFile8);
    fileMap.put("filesize", files[i].getSize());
    fileMap.put("filepath","/web/board/photo/" + newFile8 + ".png" );
    //fileList.add(fileMap);
    System.out.println(fileMap);
  }
  
  HashMap<String, Object> resultMap = new HashMap<>();
  resultMap.put("list8", list8);
  return resultMap;
}

int l8 = 0;
int count8 = 0;
synchronized private String getNewFile8() {
  if (count8 > 100) {
    count8 = 0;
  }
  return String.format("%d_%d", System.currentTimeMillis(), ++l8); 
}




/////////////////////List9

@RequestMapping(path="list9")
public HashMap<String, Object> list9(MultipartFile[] files) throws Exception {
  
  ArrayList<Object> list9 = new ArrayList<>();
  
  for (int i = 0; i < files.length; i++) {
    if (files[i].isEmpty()) 
      break;
    
    String newFile9= this.getNewFile9();
    File file = new File(ctx.getRealPath("/web/board/photo/" + newFile9));
    files[i].transferTo(file);
    list9.add(newFile9);
    
    System.out.printf("fileList9: %s",list9);
    System.out.printf("newFilename9: %s",newFile9);
    File thumbnail = new File(ctx.getRealPath("/web/board/photo/" + newFile9));
    Thumbnails.of(file).size(400, 400).outputFormat("png").toFile(thumbnail); 

    HashMap<String,Object> fileMap = new HashMap<>();
    fileMap.put("filename", newFile9);
    fileMap.put("filesize", files[i].getSize());
    fileMap.put("filepath","/web/board/photo/" + newFile9 + ".png" );
    //fileList.add(fileMap);
    System.out.println(fileMap);
  }
  
  HashMap<String, Object> resultMap = new HashMap<>();
  resultMap.put("list9", list9);
  return resultMap;
}

int l9 = 0;
int count9 = 0;
synchronized private String getNewFile9() {
  if (count9 > 100) {
    count9 = 0;
  }
  return String.format("%d_%d", System.currentTimeMillis(), ++l9); 
}

}














