package fanduck.control.json;

import java.util.ArrayList;
import java.util.HashMap;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import fanduck.domain.Alarm;
import fanduck.service.AlarmService;

@RestController
@RequestMapping("/alarm/")
public class AlarmControl {
  
  @Autowired ServletContext ctx;
  @Autowired AlarmService alarmService;
  
  
  @RequestMapping("list")
  public JsonResult list() throws Exception {
    
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("list", alarmService.list());
    System.out.println(dataMap);
    
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
  @RequestMapping(path="add")
  public Object add(Alarm alarm, MultipartFile files) throws Exception {
    HashMap<String,Object> resultMap = new HashMap<>();
    
    System.out.println("서버 응답 완료!"); 
    
    
    ArrayList<Object> fileList = new ArrayList<>();
    
    
    return new JsonResult(JsonResult.SUCCESS, "ok");
  }

  
  @RequestMapping("delete")
  public JsonResult delete(int mpNo) throws Exception {
    alarmService.remove(mpNo);
    return new JsonResult(JsonResult.SUCCESS, "ok");
  }  
  
//  @RequestMapping("add")
//  public JsonResult add(Alarm alarm, String filename) throws Exception {
//	alarm.setMpPhotopath(filename);
//    alarmService.add(alarm);
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









