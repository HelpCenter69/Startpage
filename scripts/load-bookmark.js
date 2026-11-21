const bookmarksDiv = document.getElementById("bookmarks");
const emptyMsg = `<div>No bookmarks found.</div>`;
const invalidMsg = `<div>Invalid syntax found in bookmarks. <span class='link' onClick='switchTo(\"setting\")'>Please check your input!</span></div>`;

function loadBookmark() {
	bookmarksDiv.innerHTML = "";
	const bookmarks = window.startpageConfig.bookmarks;

	if (Array.isArray(bookmarks)) {
		if (bookmarks.length == 0) {
			bookmarksDiv.innerHTML = emptyMsg;
			return;
		}

		bookmarks.forEach((bookmark) => {
			const bookmarkRows = document.createElement("div");
			bookmarkRows.className = "bookmarks-row";

			const bookmarkTitle = document.createElement("h3");
			bookmarkTitle.innerText = bookmark.title ? bookmark.title : "Invalid title!";
			bookmarkRows.appendChild(bookmarkTitle);

			try {
				bookmark.links.forEach((link) => {
					const bookmarkLink = document.createElement("a");
					bookmarkLink.href = link.value ? link.value : "#";
					bookmarkLink.innerText = link.label ? link.label : "Invalid\nlink!";
					bookmarkRows.appendChild(bookmarkLink);
				});
			} catch (error) {
				bookmarkRows.innerHTML += "Invalid <br />Format!";
			}

			bookmarksDiv.appendChild(bookmarkRows);
		});
	} else bookmarksDiv.innerHTML = invalidMsg;
}

// ------------------------------
// init bookmark on load
loadBookmark();
