package fanduck.control.json;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
  public JsonResult list(@RequestParam(value="mno") int mno) throws Exception {
    System.out.println("mno를 추가합니다! " + mno);
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("list", moviePersonService.list(mno));
    System.out.println(dataMap);
    
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
  @RequestMapping("detail")
  public JsonResult detail(@RequestParam(value="mno") int mno,
		  				   @RequestParam(value="mpNo") int mpNo) throws Exception {
    MoviePerson moviePerson = moviePersonService.get(mno, mpNo);
    System.out.println(mno + " : " + mpNo + " : " + moviePerson);
    if (moviePerson == null) {
      return new JsonResult(JsonResult.FAIL, mpNo + "번 영화인이 없습니다.");
    }
    return new JsonResult(JsonResult.SUCCESS, moviePerson);
  }
  
  @RequestMapping(path="add")
  public Object add(MoviePerson moviePerson, MultipartFile files) throws Exception {
    HashMap<String,Object> resultMap = new HashMap<>();
    
    System.out.println("서버 응답 완료!"); 
    
    
    ArrayList<Object> fileList = new ArrayList<>();
    
        HashMap<String,Object> fileMap = new HashMap<>();

        String newFilename = this.getNewFilename();
        File file = new File(ctx.getRealPath("/web/movieperson/photo/" + newFilename));
        files.transferTo(file);
        
        File thumbnail = new File(ctx.getRealPath("/web/movieperson/photo/" + newFilename + "_80"));
        Thumbnails.of(file).size(80, 80).outputFormat("png").toFile(thumbnail); 

        thumbnail = new File(ctx.getRealPath("/web/movieperson/photo/" + newFilename + "_140"));
        Thumbnails.of(file).size(140, 140).outputFormat("png").toFile(thumbnail);
        
        thumbnail = new File(ctx.getRealPath("/web/movieperson/photo/" + newFilename + "_200"));
        Thumbnails.of(file).size(200, 200).outputFormat("png").toFile(thumbnail);
          
        fileMap.put("filename", newFilename);
        fileMap.put("filesize", files.getSize());
        fileList.add(fileMap);
        
        resultMap.put("fileList", fileList);    
        
    moviePerson.setMpPhotopath("photo/" + newFilename + "_200.png");
    moviePersonService.add(moviePerson);
    
    return new JsonResult(JsonResult.SUCCESS, "ok");
  }

  
  int count = 0;
  synchronized private String getNewFilename() {
	  if (count > 100) {
		  count = 0;
	  }
	  return String.format("%d_%d", System.currentTimeMillis(), ++count); 
  }

  
  @RequestMapping("delete")
  public JsonResult delete(MoviePerson moviePerson) throws Exception {
    moviePersonService.remove(moviePerson);
    return new JsonResult(JsonResult.SUCCESS, "ok");
  }  
  
  @RequestMapping("update")
  public Object update(MoviePerson moviePerson, MultipartFile files) throws Exception {
    HashMap<String,Object> resultMap = new HashMap<>();   
	    
    ArrayList<Object> fileList = new ArrayList<>();
    HashMap<String,Object> fileMap = new HashMap<>();  
    
    if (files != null) {
	    String newFilename = this.getNewFilename();
	    File file = new File(ctx.getRealPath("/web/movieperson/photo/" + newFilename));
	    files.transferTo(file);
	    
	    File thumbnail = new File(ctx.getRealPath("/web/movieperson/photo/" + newFilename + "_80"));
	
	    thumbnail = new File(ctx.getRealPath("/web/movieperson/photo/" + newFilename + "_140"));
	    Thumbnails.of(file).size(140, 140).outputFormat("png").toFile(thumbnail);
	    
	    thumbnail = new File(ctx.getRealPath("/web/movieperson/photo/" + newFilename + "_200"));
	    Thumbnails.of(file).size(200, 200).outputFormat("png").toFile(thumbnail);
	      
	    fileMap.put("filename", newFilename);
	    fileMap.put("filesize", files.getSize());
	    fileList.add(fileMap);
	    
	    resultMap.put("fileList", fileList);    
	    moviePerson.setMpPhotopath("photo/" + newFilename + "_200.png");
	    resultMap.put("moviePerson", moviePerson);
	    
    	System.out.println(moviePerson.getMpContent());
	    moviePersonService.update(moviePerson);
    } else {
    	System.out.println(moviePerson.getMpContent());
    	moviePersonService.update(moviePerson);
    }
    resultMap.put("fileList", fileList);
    return resultMap;
  }
  
  @RequestMapping("test")
  public JsonResult test() throws Exception {
	System.out.println("서버에 전송은 됩니당");  
	  
    return new JsonResult(JsonResult.SUCCESS, "ok");
  }
}









