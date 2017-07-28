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
  
//  
//  @RequestMapping("add")
//  public Object add(Board board, MultipartFile files) throws Exception {
//    HashMap<String,Object> resultMap = new HashMap<>();
//    
//    System.out.println("서버 응답 완료!"); 
//    
//    
//    ArrayList<Object> fileList = new ArrayList<>();
//    
//        System.out.println(files.getOriginalFilename());
//        HashMap<String,Object> fileMap = new HashMap<>();
//
//        String newFilename = this.getNewFilename();
//        File file = new File(ctx.getRealPath("/web/board/photo/" + newFilename));
//        files.transferTo(file);
//        
//        File thumbnail = new File(ctx.getRealPath("/web/board/photo/" + newFilename + "_80"));
//        Thumbnails.of(file).size(80, 80).outputFormat("png").toFile(thumbnail); 
//
//        thumbnail = new File(ctx.getRealPath("/web/board/photo/" + newFilename + "_140"));
//        Thumbnails.of(file).size(140, 140).outputFormat("png").toFile(thumbnail);
//        
//        thumbnail = new File(ctx.getRealPath("/web/board/photo/" + newFilename + "_200"));
//        Thumbnails.of(file).size(200, 200).outputFormat("png").toFile(thumbnail);
//          
//        fileMap.put("filename", newFilename);
//        fileMap.put("filesize", files.getSize());
//        fileList.add(fileMap);
//        
//        resultMap.put("fileList", fileList);    
//        
//    board.setBdPhoto("photo/" + newFilename + "_200.png");
//    boardService.add(board);
//    
//    return new JsonResult(JsonResult.SUCCESS, "ok");
//  }

//  private List<String> processMultipartFiles(MultipartFile[] files) throws Exception {
//    //중복되는 코드를 내부 메소드로 뽑아내자.
//    ArrayList<String> photoList = new ArrayList<>();
//    for (MultipartFile file : files) {
//      if (file.isEmpty())
//        continue;
//      String filename = getNewFilename();
//      file.transferTo(new File(servletContext.getRealPath("/board/photo/" + filename)));
//      //클라이언트가 올린 파일 중 임시폴더에 저장된 파일을 이 경로로 옮긴다.
//      photoList.add(filename);
//    }
//    return photoList;
//  }
//
//  @RequestMapping("upload")
//  public JsonResult upload(MultipartFile[] files) throws Exception {
//    ArrayList<String> fileList = new ArrayList<>();
//    for (MultipartFile file : files) {
//      if (file.isEmpty())
//        continue;
//      
//      String filename = getNewFilename();
//      file.transferTo(new File(servletContext.getRealPath("/board/photo/" + filename)));
//      fileList.add(filename);
//      }
//    return new JsonResult(JsonResult.SUCCESS, fileList);
//  }
  
  
  
  
  int count = 0;

  private String getNewFilename() {
    // TODO Auto-generated method stub
    if (count > 100) {
      count = 0;
    }
    return String.format("%d %d",System.currentTimeMillis(), ++count);
  }

  
}









