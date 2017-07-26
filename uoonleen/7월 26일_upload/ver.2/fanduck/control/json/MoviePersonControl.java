package fanduck.control.json;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import fanduck.domain.MoviePerson;
import fanduck.service.MoviePersonService;
import net.coobird.thumbnailator.Thumbnails;

@RestController
@RequestMapping("/movieperson/")
public class MoviePersonControl {
  
  @Autowired ServletContext ctx;
  @Autowired MoviePersonService moviePersonService;
  
  
  @RequestMapping("list")
  public JsonResult list() throws Exception {
    
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("list", moviePersonService.list());
    System.out.println(dataMap);
    
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }

//  @RequestMapping("upload")
//  public Object upload(String mpName, String content, MultipartFile[] files) throws Exception {
//    HashMap<String,Object> resultMap = new HashMap<>();
//    resultMap.put("mpName", mpName);
//    resultMap.put("content", content);
//    
//    ArrayList<Object> fileList = new ArrayList<>();
//    
//    for (int i = 0; i < files.length; i++) {
//      files[i].transferTo(new File(ctx.getRealPath("/upload/" + files[i].getOriginalFilename())));
//      HashMap<String,Object> fileMap = new HashMap<>();
//      fileMap.put("filename", files[i].getOriginalFilename());
//      fileMap.put("filesize", files[i].getSize());
//      fileList.add(fileMap);
//    }
//    resultMap.put("fileList", fileList);
//    return resultMap;
//  }
  
  @RequestMapping(path="upload")
  public Object upload(String mpNickname, String mpCode, String mpContent, MultipartFile[] files) throws Exception {
    HashMap<String,Object> resultMap = new HashMap<>();
	  resultMap.put("mpNickname", mpNickname);
	  resultMap.put("mpCode", mpCode);
	  resultMap.put("mpContent", mpContent);
	  
//	  resultMap.put("mpPhotopath", filename);
	System.out.println(mpNickname);  	
	System.out.println(files);
	System.out.println(files.length);
    System.out.println("서버 응답 완료!"); 

    ArrayList<Object> fileList = new ArrayList<>();
    
    for (int i = 0; i < files.length; i++) {
        System.out.println(files[i].getOriginalFilename());
        HashMap<String,Object> fileMap = new HashMap<>();
        
        String newFilename = this.getNewFilename();
        File file = new File(ctx.getRealPath("/web/movieperson/photo/" + newFilename));
        files[i].transferTo(file);
        
        File thumbnail = new File(ctx.getRealPath("/web/movieperson/photo/" + newFilename + "_80"));
        Thumbnails.of(file).size(80, 80).outputFormat("png").toFile(thumbnail); 

        thumbnail = new File(ctx.getRealPath("/web/movieperson/photo/" + newFilename + "_140"));
        Thumbnails.of(file).size(140, 140).outputFormat("png").toFile(thumbnail);
        
        thumbnail = new File(ctx.getRealPath("/web/movieperson/photo/" + newFilename + "_200"));
        Thumbnails.of(file).size(200, 200).outputFormat("png").toFile(thumbnail);
          
        fileMap.put("filename", newFilename);
        fileMap.put("filesize", files[i].getSize());
        fileList.add(fileMap);
      }
    
//      File thumbnail = new File(ctx.getRealPath("/web/movieperson/photo/" + newFilename + "_80"));
//      Thumbnails.of(file).size(80, 80).outputFormat("png").toFile(thumbnail); 
//
//      thumbnail = new File(ctx.getRealPath("/web/movieperson/photo/" + newFilename + "_140"));
//      Thumbnails.of(file).size(140, 140).outputFormat("png").toFile(thumbnail);
//      
//      thumbnail = new File(ctx.getRealPath("/web/movieperson/photo/" + newFilename + "_200"));
//      Thumbnails.of(file).size(200, 200).outputFormat("png").toFile(thumbnail);
        
    
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

  @RequestMapping("add")
  public JsonResult add(MoviePerson moviePerson, String filename) throws Exception {
	moviePerson.setMpPhotopath(filename);
    moviePersonService.add(moviePerson);
    
    return new JsonResult(JsonResult.SUCCESS, "ok");
  }
  
  @RequestMapping("info")
  public JsonResult info(String mpNickname, String mpCode, String mpContent, String mpInfo) throws Exception {
	System.out.println(mpNickname);
	System.out.println(mpInfo);
    return new JsonResult(JsonResult.SUCCESS, "ok");
  }
  
  /*
  @RequestMapping("detail")
  public JsonResult detail(int no) throws Exception {
    Teacher teacher = teacherService.get(no);
    if (teacher == null) {
      return new JsonResult(JsonResult.FAIL, no + "번 강사가 없습니다.");
    }
    return new JsonResult(JsonResult.SUCCESS, teacher);
  }
  
  @RequestMapping("update")
  public JsonResult update(Teacher teacher) throws Exception {
    teacherService.update(teacher);
    return new JsonResult(JsonResult.SUCCESS, "ok");
  }
  
  @RequestMapping("delete")
  public JsonResult delete(int no) throws Exception {
    teacherService.remove(no);
    return new JsonResult(JsonResult.SUCCESS, "ok");
  }  
  

  
  @RequestMapping("upload")
  public JsonResult upload(MultipartFile[] files) throws Exception {
    ArrayList<String> fileList = new ArrayList<>();
    for (MultipartFile file : files) {
      if (file.isEmpty())
        continue;
      String filename = getNewFilename();
      file.transferTo(new File(servletContext.getRealPath("/teacher/photo/" + filename)));
      fileList.add(filename);
    }
    return new JsonResult(JsonResult.SUCCESS, fileList);
  }
  
  int count = 0;
  synchronized private String getNewFilename() {
    if (count > 100) {
      count = 0;
    }
    return String.format("%d_%d", System.currentTimeMillis(), ++count); 
  }
  */
}









