package fanduck.service;

import java.util.List;

import fanduck.domain.Alarm;

public interface AlarmService {
  List<Alarm> list() throws Exception;
  void add(Alarm alarm) throws Exception;
  void update(Alarm alarm) throws Exception;
  void remove(int alarmNo) throws Exception;
}







