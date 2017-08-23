package fanduck.dao;

import java.util.List;
import java.util.Map;

import fanduck.domain.Alarm;

public interface AlarmDao {
  List<Alarm> selectList(Map<String, Object> valueMap);
  int insert(Alarm alarm);
  int delete(int alarmNo);
  int update(Alarm alarm);
}
