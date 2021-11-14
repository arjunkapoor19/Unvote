var vote = document.getElementById("votebtn"),
  count = 0;
vote.onclick = function() {
  count += 1;
  vote.innerHTML = "VOTES: " + count;
  vote.style.pointerEvents = "none";
  unvote.style.pointerEvents = "none";
  unvote.innerHTML = "UNVOTES: " + butt;
};

var unvote = document.getElementById("unvotebtn"),
  butt = 0;
unvote.onclick = function() {
  butt += 1;
  unvote.innerHTML = "UNVOTES: " + butt;
  vote.style.pointerEvents = "none";
  unvote.style.pointerEvents = "none";
  vote.innerHTML = "VOTES: " + count;
};

function disableButton(btn) {
  document.getElementById("votebtn").disabled = true;
  alert("Button has been disabled.");
}