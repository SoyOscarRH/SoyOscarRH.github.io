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
import java.util.Date;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

class Comment {
  final String username;
  final String message;
  final long time;

  Comment(String username, String message) {
    this.username = username;
    this.message = message;
    this.time = new Date().getTime();
  }
}

@WebServlet("/get_comments")
public class GetCommentsServlet extends HttpServlet {

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
    response.setContentType("application/json;");

    ArrayList<Comment> messages = new ArrayList<Comment>();
    messages.add(new Comment("Juan", "Coool"));
    messages.add(new Comment("Pepe", "This is awesome"));

    String jsonResponse = new Gson().toJson(messages);
    response.getWriter().print(jsonResponse);
  }
}
