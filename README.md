# send-daily-schedule

A tiny util to send yourself an email with your schedule.

## Setup

What you'll need:

- Server
- A tiny bit of JSON & JS knowledge

What your Server needs:

- Git
(- 2 Cron-Jobs)
- Node (LTS)
- npm (LTS)
- SMTP Server

### Installation

This pretends you have an Git, Node, npm and SMTP installation!

#### Linux

```bash
# This will download the repo
$ git clone link
# This will change the directory to the downloaded repo
$ cd send-daily-schedule
# This will create a folder named 'data'
$ mkdir data
# This installes all npm dependencies
$ npm install
```

#### Windows

(for explanations see [Linux](#Linux))

```bash
git clone link
cd send-daily-schedule
mkdir data
npm install
```

### Configuration

This step is a bit more complicated

1. Create a `<your name>.json` (replace "\<your name>" with your name)

2. Fill out example.json, rename the file to fit your name (should look like "yourname.json") and then move into `data/`

3. Fill out `example.config.js` and rename it to `config.js`

4. Setup a cronjob/task executing `npm run daily:today` and `npm run daily:tomorrow` every day

5. Wait for your first email to arrive!
