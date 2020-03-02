// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
package com.google.sps.servlets;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Map;
import java.util.stream.Collectors;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Query.SortDirection;
import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;

@WebServlet("/comment")
public class CommentsServlet extends HttpServlet {
  private DatastoreService datastore;

  @Override
  public void init() {
    datastore = DatastoreServiceFactory.getDatastoreService();
  }

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    String comments = new Gson().toJson(getComments());

    response.setContentType("application/json;charset=UTF-8");
    response.getWriter().print(comments);
  }
  
  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
    String body = request.getReader().lines().collect(Collectors.joining());
    Map data = new Gson().fromJson(body, Map.class);

    String username = data.get("username").toString();
    String message = data.get("message").toString();

    Comment comment = new Comment(username, message);
    Entity commentEntity = comment.toDataStore();
    datastore.put(commentEntity);

    response.setContentType("application/json;");
    response.getWriter().println("{\"message\": \"" + comment.message + "\"}");
  }

  private ArrayList<Comment> getComments() {
    Query query = new Query("Comment").addSort("time", SortDirection.DESCENDING);
    
    ArrayList<Comment> result = new ArrayList<Comment> ();
    for (Entity entity : datastore.prepare(query).asIterable()) {
      result.add(new Comment(entity));
    }

    return result;
  }
}
