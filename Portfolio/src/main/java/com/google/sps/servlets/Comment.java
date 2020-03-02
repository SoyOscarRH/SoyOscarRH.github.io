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

  Entity toDataStore() {
    Entity commentEntity = new Entity("Comment");
    commentEntity.setProperty("username", username);
    commentEntity.setProperty("message", message);
    commentEntity.setProperty("time", time);

    return commentEntity;
  }
}
