# GitHub Purpose-Driven Portal

A beautiful, interactive dashboard to monitor GitHub repositories organized by their purpose and objective. Display issues, pull requests, and releases from multiple repositories in organized sections.

## Features

✨ **Purpose-Based Organization** - Group repositories by their role (Frontend, Backend, API, Database, DevOps, Infrastructure, etc.)

📊 **Multi-Output Support** - Display Issues & PRs, Issues Only, PRs Only, or Releases for each repository

🎨 **Beautiful UI** - Gradient-themed cards with color-coded purpose sections

🔐 **Secure Token Storage** - Your GitHub token is stored locally in browser storage (never sent to external servers)

⚡ **Real-time Data** - Fetch live data from GitHub API with configurable repositories

📱 **Responsive Design** - Works on desktop, tablet, and mobile devices

💾 **Persistent Configuration** - Your repository list and settings are saved locally

## Getting Started

### 1. Open the Portal

Simply open `portal.html` in your web browser. No installation or build process needed!

```
File > Open File > portal.html
```

Or serve it via a local web server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js with http-server
npx http-server
```

Then visit: `http://localhost:8000/portal.html`

### 2. Configure GitHub Token (Optional)

For **public repositories**, you don't need a token. However, for:
- **Private repositories** - You need a token
- **Higher API rate limits** - Recommended for monitoring many repos
- **Faster data fetching** - 60 requests/hour → 5,000 requests/hour

**To create a GitHub token:**

1. Go to https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Select scopes:
   - `public_repo` - For public repositories
   - `repo` - For private repositories
4. Copy the token
5. Paste it in the "GitHub Token" field in the portal
6. Click "Save Token"

### 3. Add Repositories with Purpose

Fill in the repository configuration form:

| Field | Example | Description |
|-------|---------|-------------|
| **Repository** | `facebook/react` | GitHub repository in `owner/name` format |
| **Purpose Category** | `Frontend Framework` | The role or purpose of this repo |
| **Purpose Description** | `React is a JavaScript library for building user interfaces` | What does this repo do? |
| **Output Type** | `Issues & PRs` | What data to display:<br/>- **Issues & PRs** - Open issues and pull requests<br/>- **Issues Only** - Only open issues<br/>- **PRs Only** - Only open pull requests<br/>- **Releases** - Latest releases |

### Example Setup

Here's a sample configuration for a full-stack application:

```
Repository: facebook/react
Purpose: Frontend Framework
Description: React JavaScript library for building user interfaces
Output Type: Issues & PRs

Repository: expressjs/express
Purpose: Backend Framework
Description: Fast, unopinionated web framework for Node.js
Output Type: Issues & PRs

Repository: kubernetes/kubernetes
Purpose: Infrastructure
Description: Production-grade container orchestration
Output Type: Issues & PRs

Repository: mongodb/mongo
Purpose: Database
Description: MongoDB document database
Output Type: Releases

Repository: hashicorp/terraform
Purpose: DevOps
Description: Infrastructure as code automation
Output Type: Issues & PRs
```

## Portal Interface

### Purpose Sections
- Each unique purpose category gets its own section with a gradient header
- Repositories with the same purpose are displayed together
- Color-coded cards for easy visual navigation

### Repo Cards
- **Name & Link** - Click to visit the repository on GitHub
- **Purpose & Description** - Shows why this repo is included
- **Stats** - Stars, forks, and watchers count
- **Issues** - List of open issues with labels
- **Pull Requests** - List of open PRs with author info
- **Releases** - Latest releases with dates (if selected)

## Data Displayed

### For Issues
- Issue number and title
- Author username
- Associated labels with color coding
- Direct link to GitHub

### For Pull Requests
- PR number and title
- Author username
- Direct link to GitHub

### For Releases
- Release tag name
- Publication date
- Pre-release indicator (if applicable)

## Features Explained

### Persistent Storage
- All repository configurations are saved to your browser's local storage
- Token is stored locally (never sent to external servers)
- Configuration persists even after closing and reopening the browser

### API Rate Limiting
- **Without token:** 60 requests/hour per IP
- **With token:** 5,000 requests/hour per user
- The portal fetches data for each repo (1 request per repo + data requests)

### Dark Mode Considerations
- Portal uses a gradient background optimized for visibility
- All cards have high contrast for readability
- Adjustable color scheme in the CSS

## Customization

### Modify Colors

Edit the CSS gradient colors in `portal.html`:

```css
.purpose-header-0 { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
.purpose-header-1 { background: linear-gradient(135deg, #764ba2 0%, #f093fb 100%); }
```

### Adjust Data Limits

Change the number of items displayed by modifying the per_page parameter:

```javascript
// Currently set to 10, change to 20 for more items:
`https://api.github.com/repos/${owner}/${name}/issues?state=open&per_page=10`
```

### Change Default Purpose Categories

Add new purpose categories by modifying the form dropdown or letting users type custom categories (currently supported).

## Troubleshooting

### "Error loading repository data"
- ❌ Verify the repository exists: `owner/name` format
- ❌ Check your GitHub token is valid
- ❌ Ensure you have permission to access private repositories

### "No data displayed"
- ✅ The repository might have no open issues/PRs
- ✅ Try a different "Output Type" (e.g., Releases instead of Issues)
- ✅ Check your internet connection

### "Rate limit exceeded"
- ✅ Add a GitHub token to increase your rate limit
- ✅ Wait an hour for rate limit to reset
- ✅ Reduce the number of monitored repositories

### Token not saving
- ✅ Check if browser allows local storage
- ✅ Try a different browser
- ✅ Clear browser cache and try again

## API Limits

Each repository configuration makes these API calls:

1. Get repository info (1 call)
2. Get issues/PRs/releases based on output type (1 call per type)

**Example:** 5 repos with "Issues & PRs" output = ~15 API calls

## Browser Compatibility

- ✅ Chrome/Chromium (v90+)
- ✅ Firefox (v88+)
- ✅ Safari (v14+)
- ✅ Edge (v90+)

## Security Notes

🔒 **Your token is stored locally** - It's saved in your browser's local storage, not sent to any external server except GitHub's official API

🔒 **No backend required** - All API calls go directly to GitHub

🔒 **No tracking** - This portal doesn't track your usage

## Advanced Usage

### Use with GitHub Pages

Upload `portal.html` to a GitHub Pages repository:

1. Create a repository named `github-portal`
2. Upload `portal.html` to the main branch
3. Enable GitHub Pages in repository settings
4. Access it at `https://yourusername.github.io/github-portal/portal.html`

### Embed in Another Dashboard

The `portal.html` file is completely self-contained. You can:
- Embed it in an iframe
- Copy the CSS/JS for integration into another app
- Host it on any static file server

## Examples

### Monitoring a Full-Stack Project

**Purpose Sections:**
- **Frontend** - React, Vue, Angular repos
- **Backend** - Node.js, Python, Go API servers
- **Database** - MongoDB, PostgreSQL, Redis
- **Infrastructure** - Kubernetes, Docker, Terraform
- **Testing** - Jest, Cypress, Pytest

### Monitoring Open Source Contributions

Track repositories you contribute to:
- **My PRs** - Issues where you need to respond
- **My Contributions** - Repos you actively maintain
- **Following** - Projects you're interested in

### Team Development Dashboard

Monitor your team's repositories:
- **Current Sprint** - Active repositories
- **Production** - Critical systems
- **Development** - In-progress features
- **Infrastructure** - Deployment and DevOps

## Tips & Tricks

💡 Use **Release output** for library/framework tracking to see version updates

💡 Use **Issues only** for bug tracking dashboards

💡 Use **PRs only** for review process monitoring

💡 Group similar tech stack repos under the same purpose for better organization

💡 Update your portal periodically by clicking "Add Repo" buttons to see fresh data

## Future Enhancements

Potential features for future versions:
- Auto-refresh intervals
- Custom emoji for purpose categories
- Search/filter functionality
- Export data to CSV/JSON
- Dark mode toggle
- Webhook integration for real-time updates
- Advanced GitHub search syntax support

## Contributing

Found a bug or want to improve the portal? Create an issue or pull request!

## License

This project is open source and available under the MIT License.

## Support

For issues, questions, or suggestions:
1. Check the [Troubleshooting](#troubleshooting) section
2. Review the [Getting Started](#getting-started) guide
3. Create an issue in this repository

---

**Happy monitoring!** 🚀

Built with ❤️ for GitHub enthusiasts
