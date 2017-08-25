package fanduck.control.json;

import java.util.HashMap;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fanduck.domain.Movie;
import fanduck.service.MovieService;

@RestController
@RequestMapping("/movie/")
public class MovieControl {
  
  @Autowired ServletContext ctx;
  @Autowired MovieService movieService;
  
  
  @RequestMapping("list")
  public JsonResult list() throws Exception {
    
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("list", movieService.list());
    System.out.println(dataMap);
    
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
  @RequestMapping(path="add")
  public Object add(Movie movie) throws Exception {
    System.out.println("서버 응답 완료!"); 
    movieService.add(movie);
    return new JsonResult(JsonResult.SUCCESS, "ok");
  }

  
  @RequestMapping("delete")
  public JsonResult delete(String mpNo) throws Exception {
    movieService.remove(mpNo);
    return new JsonResult(JsonResult.SUCCESS, "ok");
  }  
    
//  @RequestMapping("update")
//  public JsonResult update(Teacher teacher) throws Exception {
//    teacherService.update(teacher);
//    return new JsonResult(JsonResult.SUCCESS, "ok");
//  }
  
}









