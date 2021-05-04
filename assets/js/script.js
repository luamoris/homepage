// ~~~~~~~~~~~~~ script.js

// ~~~~~~~~~~~~~ Repositories

const timelineGithub = document.getElementById('timelineGithub');

function createRepElement(repData) {
	const liElm = document.createElement('li');
	liElm.className = 'helpful helpful_rep';
	const linkElm = document.createElement('a');
	linkElm.innerText = repData.name;
	linkElm.href = repData.html_url;
	linkElm.rel = 'external';
	linkElm.target = '_blank';
	linkElm.rel = 'noopener';
	// ===
	liElm.appendChild(linkElm);
	return liElm;
}

async function getGitHubReps(count) {
	const response = await fetch(
		`https://api.github.com/users/luamoris/repos?accept=application/vnd.github.v3+json&sort=pushed&direction=desc&per_page=${count}`,
		{ method: 'GET' },
	);
	if (response.ok) {
		const res = await response.json();
		res.forEach((repData) => {
			const repElm = createRepElement(repData);
			timelineGithub.appendChild(repElm);
		});
	}
}

// ~~~~~~~~~~~~~

getGitHubReps(5)

// ~~~~~~~~~~~~~
