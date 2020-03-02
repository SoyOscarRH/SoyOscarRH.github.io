package com.google.sps.servlets;

import java.util.ArrayList;
import java.util.Date;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;

public class Comment {
  final String username;
  final String message;
  final long time;

  Comment(String username, String message) {
    this.username = username;
    this.message = message;
    this.time = System.currentTimeMillis();
  }

  Comment(Entity entity) {
    this.username = (String) entity.getProperty("username");
    this.message = (String) entity.getProperty("message");
    this.time = (long) entity.getProperty("time");
  }

  void toDataStore() {
    Entity taskEntity = new Entity("Comment");
    taskEntity.setProperty("username", username);
    taskEntity.setProperty("message", message);
    taskEntity.setProperty("time", time);

    DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
    datastore.put(taskEntity);
  }
}