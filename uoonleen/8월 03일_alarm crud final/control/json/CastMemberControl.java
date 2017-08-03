package fanduck.control.json;

import java.util.HashMap;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fanduck.domain.CastMember;
import fanduck.service.CastMemberService;

@RestController
@RequestMapping("/castmember/")
public class CastMemberControl {
  
  @Autowired ServletContext ctx;
  @Autowired CastMemberService castMemberService;
  
  
  @RequestMapping("list")
  public JsonResult list() throws Exception {
    
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("list", castMemberService.list());
    System.out.println(dataMap);
    
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
  @RequestMapping(path="add")
  public Object add(CastMember castMember) throws Exception {
    System.out.println("서버 응답 완료!"); 
    castMemberService.add(castMember);
    return new JsonResult(JsonResult.SUCCESS, "ok");
  }

  
  @RequestMapping("delete")
  public JsonResult delete(String fpCode) throws Exception {
    castMemberService.remove(fpCode);
    return new JsonResult(JsonResult.SUCCESS, "ok");
  }
  
  @RequestMapping("select")
  public JsonResult select(String mvNo, String fpCode) throws Exception {
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("select", castMemberService.getByMvnoFpcode(mvNo, fpCode));
    System.out.println(dataMap);
    
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
  @RequestMapping("update")
  public JsonResult update(CastMember castMember) throws Exception {
	System.out.println(castMember.isIfRead());
    castMemberService.update(castMember);
    return new JsonResult(JsonResult.SUCCESS, "ok");
  }
}








