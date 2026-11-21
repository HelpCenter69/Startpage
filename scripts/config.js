window.startpageConfig = {
	title: "New Tab",
	username: "User",
	favicon: "favicon.ico",
	coverImage: "images/neon.gif",
	coverImageOpacity: 0.6,
	coverImageBlur: 2,
	enableAnimation: false,
	showClockInImage: true,
	showClockInDate: false,
	showSeconds: true,
	amPm: true,
	searchEngine: "google",
	openInNewWindow: false,
	bookmarks: [
		{
			title: "Reddit",
			links: [
				{ label: "r/startpages", value: "https://www.reddit.com/r/startpages/" },
				{ label: "r/worldnews", value: "https://www.reddit.com/r/worldnews/" },
				{ label: "Reddit Home", value: "https://www.reddit.com/" },
				{ label: "Old Reddit", value: "https://old.reddit.com/" },
			],
		},
		{
			title: "Dev",
			links: [
				{ label: "Github", value: "https://github.com/" },
				{ label: "Devdocs", value: "https://devdocs.io/" },
				{ label: "MDN", value: "https://developer.mozilla.org/en-US/docs/" },
				{ label: "Poliigon", value: "https://www.poliigon.com/" },
			],
		},
		{
			title: "Entertainment",
			links: [
				{ label: "Mangadex", value: "https://mangadex.org/" },
				{ label: "Crunchyroll", value: "https://www.crunchyroll.com/" },
				{ label: "Youtube", value: "https://youtube.com" },
			],
		},
		{
			title: "Tools",
			links: [
				{ label: "Wolfram Alpha", value: "https://www.wolframalpha.com/" },
				{ label: "Coolors", value: "https://coolors.co/generate" },
			],
		},
		{
			title: "Personal",
			links: [{ label: "Gmail", value: "https://mail.google.com/" }],
		},
	],
	userStyle: `:root {
  --bg-image: url("");
  --bg-color: #282a36;
  --card-bg-color: #44475a4d;
  --card-shadow-color: #6272a4;
  --light-color: #dbdbdb;
  --light-dim-color: #b3b3b3;
  --primary-color: #50fa7b;
  --primary-dim-color: #05a82e;
  --secondary-color: #bd93f9;
  --secondary-dim-color: #a76ef7;
  --search-input-color: #f8f8f2;
  --search-btn-color: #6272a4;
  --search-btn-hover-color: #ffffff1a;
  --gray: #44475a;
  --warning-color: #ffb86c;
  --danger-color: #ff5555;
  --danger-dim-color: #ff0000;
}`,
};
