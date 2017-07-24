package fanduck.control.json;

import java.util.HashMap;
import javax.servlet.ServletContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fanduck.service.BoardService;

@RestController
@RequestMapping("/web/board/")
public class BoardControl {

  @Autowired ServletContext servletContext;
  @Autowired BoardService boardService;

  @RequestMapping("list")
  public JsonResult detail() throws Exception {

    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("list", boardService.list());
    System.out.println(dataMap);
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }


}









