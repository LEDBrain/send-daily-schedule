# send-daily-schedule

A tiny util to send yourself an email with your schedule.

## Setup

What you'll need:

- Server
- A tiny bit of JSON & JS knowledge

What your Server needs:

- Git
- 2 Cron-Jobs or similar
- Node (LTS)
- npm (LTS)
- SMTP Server

### Installation

This pretends you have an Git, Node, npm and SMTP installation!

#### Linux

```bash
# This will download the repo
$ git clone https://github.com/TeamCoffeeCodes/send-daily-schedule
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
git clone https://github.com/TeamCoffeeCodes/send-daily-schedule
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


## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/Ron31"><img src="https://avatars0.githubusercontent.com/u/30264441?v=4" width="100px;" alt=""/><br /><sub><b>Ron31</b></sub></a><br /><a href="https://github.com/TeamCoffeeCodes/send-daily-schedule/commits?author=Ron31" title="Code">💻</a> <a href="#maintenance-Ron31" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://teamcoffee.codes"><img src="https://avatars3.githubusercontent.com/u/42553393?v=4" width="100px;" alt=""/><br /><sub><b>KokosnussDEV</b></sub></a><br /><a href="https://github.com/TeamCoffeeCodes/send-daily-schedule/commits?author=KokosnussDEV" title="Code">💻</a> <a href="https://github.com/TeamCoffeeCodes/send-daily-schedule/pulls?q=is%3Apr+reviewed-by%3AKokosnussDEV" title="Reviewed Pull Requests">👀</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
