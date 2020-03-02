package com.google.sps.servlets;

import java.util.ArrayList;
import java.util.Date;

public class Comment {
  static ArrayList<Comment> comments;
  final String username;
  final String message;
  final long time;

  Comment(String username, String message) {
    this.username = username;
    this.message = message;
    this.time = System.currentTimeMillis();
  }
}