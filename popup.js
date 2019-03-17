document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.sync.get({reviewers: ""}, (item) => {
    document.getElementById("reviewers").value = item.reviewers;
  });
});

document.getElementById("saveButton").addEventListener("click", () => {
  var reviewers = document.getElementById("reviewers").value;
  chrome.storage.sync.set({reviewers: reviewers}, () => {});
});