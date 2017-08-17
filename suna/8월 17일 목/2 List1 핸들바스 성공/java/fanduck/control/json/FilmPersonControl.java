package fanduck.control.json;

import java.util.HashMap;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fanduck.domain.FilmPerson;
import fanduck.service.FilmPersonService;

@RestController
@RequestMapping("/filmperson/")
public class FilmPersonControl {
  
  @Autowired ServletContext ctx;
  @Autowired FilmPersonService filmPersonService;
  
  
  @RequestMapping("list")
  public JsonResult list() throws Exception {
    
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("list", filmPersonService.list());
    System.out.println(dataMap);
    
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
  @RequestMapping(path="add")
  public Object add(FilmPerson filmPerson) throws Exception {
    System.out.println("서버 응답 완료!"); 
    filmPersonService.add(filmPerson);
    return new JsonResult(JsonResult.SUCCESS, "ok");
  }

  
  @RequestMapping("delete")
  public JsonResult delete(String fpCode) throws Exception {
    filmPersonService.remove(fpCode);
    return new JsonResult(JsonResult.SUCCESS, "ok");
  }  
  
//  @RequestMapping("add")
//  public JsonResult add(FilmPerson filmPerson, String filename) throws Exception {
//	filmPerson.setMpPhotopath(filename);
//    filmPersonService.add(filmPerson);
//    
//    return new JsonResult(JsonResult.SUCCESS, "ok");
//  }
  
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









