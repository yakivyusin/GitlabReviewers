var description = document.getElementById("merge_request_description");

if (description) {
  chrome.storage.sync.get({reviewers: ""}, (item) => {
    description.value = item.reviewers.match(/\w+/g).map(reviewer => `@${reviewer}`).join(" ");
  });
}
