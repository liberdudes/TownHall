import { db } from "./firebase";
import moment from "moment";

export function deleteMessage(projectId, messageId) {
  db.ref("messages/" + messageId).remove();
  db.ref("projects/" + projectId + "/" + messageId).remove();
}

export function getMessage(id) {
  return db.ref("messages/" + id);
}

export function getProjectMessages(projectId) {
  return db.ref("projects/" + projectId);
}

export function getMessages() {
  let list = [];
  db.ref("messages").on("value", snapshot => {
    snapshot.forEach(childsnap => {
      list.push(childsnap.val());
    });
  });
  return list;
}

export function addMessageToProject(projectId, message) {
  let updates = {};

  let mKey = db.ref("messages").push().key;
  message["timestamp"] = moment().valueOf();
  message["status"] = "New";
  message["upvote"] = 0;
  message["project"] = projectId;
  message["messageId"] = mKey;

  updates["messages/" + mKey] = message;
  updates["projects/" + projectId + "/" + mKey] = true;

  db.ref().update(updates);
}

export function upvoteMessage(messageId) {
  let updates = {};

  db.ref("messages/" + messageId).on("value", snapshot => {
    updates["messages/" + messageId + "/upvote"] = snapshot.val().upvote + 1;
  });

  db.ref().update(updates);
}

export function downvoteMessage(messageId) {
  let updates = {};

  db.ref("messages/" + messageId).on("value", snapshot => {
    updates["messages/" + messageId + "/upvote"] = snapshot.val().upvote - 1;
  });

  db.ref().update(updates);
}

export function updateMessageStatus(messageId, status) {
  let updates = {};

  updates["messages/" + messageId + "/status"] = status;

  db.ref().update(updates);
}

export function getProjects() {
  let list = [];
  db.ref("projects").on("value", snapshot => {
    snapshot.forEach(snapshot => {
      list.push(snapshot.key);
    });
  });
  return list;
}
