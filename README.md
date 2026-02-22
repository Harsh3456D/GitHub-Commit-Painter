# Umbrella Commits (GitHub Graph Painter)

A Node.js automation script designed to programmatically generate past Git commits and "paint" your GitHub contribution graph. 

*Disclaimer: This project is a fun scripting and automation exercise to understand how Git timestamps and Node.js file handling work. Real coding progress is built day by day!*

## How It Works
The script utilizes `simple-git` to automate the Git workflow, `moment` to manipulate timestamps, and `random` to scatter commits across the past year. 

It works by:
1. Generating a random date within the last 365 days.
2. Writing that date to a local `data.json` file.
3. Staging and committing that file using the artificially generated timestamp.
4. Repeating the process recursively (default: 100 commits) before finally pushing the batch to GitHub.

##  Prerequisites
Make sure you have the following installed on your machine:
* [Node.js](https://nodejs.org/) (v14 or higher)
* [Git](https://git-scm.com/)

##  Installation

1. **Clone the repository:**
   ```bash
   git clone [[https://github.com/Harsh3456D/GitHub-Commit-Painter.git]](https://github.com/Harsh3456D/GitHub-Commit-Painter.git)
   cd Umbrella-Commits
Initialize the project (if not already done):

# Bash
```
npm init -y
Install the required dependencies:
```
# Bash
```
npm install jsonfile moment simple-git random
Enable ES Modules:
Ensure your package.json contains the "type": "module" configuration, as this project uses ES module imports.
```
```
JSON
{
  "type": "module"
}
# Usage
To start generating commits, simply run the entry file from your terminal:
```
# Bash
node index.js
By default, the script will generate 100 random commits over the past year. If you want to change the number of commits, open index.js and modify the argument in the final function call:

# JavaScript
// Change 100 to your desired number of commits
makeCommit(100); 

Author
Built by Harsh.


***

How does that look to you? Would you like me to draft up a quick LinkedIn post to show off this automation script to your network?
