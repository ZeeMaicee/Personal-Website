function saveComment(name, comment) {
  const commentsRef = firebase.database().ref("comments");
  const newComment = commentsRef.push();
  newComment.set({
    name: name,
    comment: comment,
    timestamp: Date.now(),
  });
}

function loadComments() {
  const commentsRef = firebase.database().ref("comments");
  commentsRef.on("value", (snapshot) => {
    const comments = snapshot.val();
    const commentSection = document.getElementById("comment-section");
    commentSection.innerHTML = ""; // Reset tampilan
    for (let id in comments) {
      const commentData = comments[id];
      const commentDiv = document.createElement("div");
      commentDiv.innerHTML = `<p><strong>${commentData.name}</strong>: ${commentData.comment}</p>`;
      commentSection.appendChild(commentDiv);
    }
  });
}
