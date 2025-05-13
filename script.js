//JS For Comment Section
function saveComment() {
  const commentList = document.getElementById('CommentList');
  const commentInput = document.getElementById('Comment');
  const commentText = commentInput.value.trim();

  if (commentText !== '') {
    const newComment = document.createElement('li');
    const commentContent = document.createElement('div');
    commentContent.textContent = commentText;
    commentContent.style.flex = '1';
    const commentInfo = document.createElement('div');
    commentInfo.className = 'comment-info';
    const now = new Date();
    commentInfo.textContent = `Posted on ${now.toLocaleDateString()} at ${now.toLocaleTimeString()}`;

    newComment.appendChild(commentContent);
    newComment.appendChild(commentInfo);
    commentList.appendChild(newComment);

    commentInput.value = '';
  }
}
//JS For Slide Show
let currentSlide = 0;
let slides;

window.onload = function() {
  slides = document.getElementsByClassName("ImgSlide");
  showSlide(currentSlide);
  setInterval(nextSlide, 15000);
};

function showSlide(index) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[index].style.display = "block";
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}