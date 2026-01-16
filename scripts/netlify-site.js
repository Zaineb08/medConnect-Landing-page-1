#!/usr/bin/env node
const token = process.env.NETLIFY_AUTH_TOKEN;
const repo = process.env.GITHUB_REPOSITORY || "";
const siteName = process.argv[2];

if (!token) {
  console.error(
    "Error: set NETLIFY_AUTH_TOKEN environment variable and try again."
  );
  process.exit(1);
}

const base = "https://api.netlify.com/api/v1";

async function fetchJson(path, opts = {}) {
  const res = await fetch(base + path, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    ...opts,
  });
  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`Request failed ${res.status}: ${txt}`);
  }
  return res.json();
}

async function listSites() {
  return fetchJson("/sites");
}

async function createSite(name) {
  return fetchJson("/sites", {
    method: "POST",
    body: JSON.stringify({ name }),
  });
}

(async () => {
  try {
    const sites = await listSites();
    if (!siteName) {
      console.log("Found sites (showing name -> id):");
      sites.slice(0, 50).forEach((s) => console.log(`${s.name} -> ${s.id}`));
      console.log("\nTo get or create a specific site run:");
      console.log(
        "  NETLIFY_AUTH_TOKEN=xxxxx node scripts/netlify-site.js your-site-name"
      );
      return;
    }

    let site = sites.find(
      (s) => s.name === siteName || s.custom_domain === siteName
    );
    if (!site) {
      console.log(`Site named "${siteName}" not found. Creating...`);
      site = await createSite(siteName);
      console.log("Created site.");
    } else {
      console.log(`Found site "${site.name}" (id: ${site.id})`);
    }

    console.log("\nSite info:");
    console.log(`- name: ${site.name}`);
    console.log(`- id: ${site.id}`);
    if (site.ssl_url) console.log(`- url: ${site.ssl_url}`);

    console.log("\nAdd the site id as a GitHub secret for this repo:");
    if (repo) {
      console.log(
        `gh secret set NETLIFY_SITE_ID -b "${site.id}" --repo ${repo}`
      );
    } else {
      console.log(`gh secret set NETLIFY_SITE_ID -b "${site.id}"`);
    }

    console.log(
      "\nAlso ensure you have set `NETLIFY_AUTH_TOKEN` as a repository secret."
    );
  } catch (err) {
    console.error("Error:", err.message || err);
    process.exit(1);
  }
})();
