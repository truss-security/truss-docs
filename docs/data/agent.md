---
sidebar_position: 5
title: Agent
toc_min_heading_level: 2
toc_max_heading_level: 3
---

<div className="text-center">
  <h1 className="text-3xl font-bold mb-4 max-w-4xl">Agent</h1>
</div>

<div className="text-left mb-12">
  <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-4">
    Agent schedules a Truss search and sends the result to a destination you choose. The schedule runs on a runner you control. Webhook URLs and API keys stay on that runner.
  </p>
  <p className="text-xl italic text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
    Open Agent from the dashboard. The page has three tabs: Connections, Runners, and Jobs.
  </p>
</div>

## The three objects

A delivery is three records that point at each other.

| Object | What it is |
| --- | --- |
| **Connection** | Where the result goes. Today that is a Discord channel. |
| **Runner** | Where the schedule runs. Docker, n8n, Zapier, Make, Tines, or a tool you run yourself. |
| **Job** | What to search, how often, which runner, and which connection. |

Create a connection and a runner before you create a job. A job cannot be saved until both exist.

Each tab has a search field that filters the list by name, and an **Add** action in the section menu. The same menu on a saved row is where you edit, pause, disable, or delete.

## Connections

A connection is a destination you can reuse across jobs.

- **Name.** A short label such as `discord-phishing`.
- **Destination.** Discord.
- **Webhook env.** The environment variable name that will hold the webhook URL, such as `DISCORD_WEBHOOK_PHISHING`. Docker uses this name. n8n, Zapier, Make, and Tines leave it blank, because those tools store the webhook themselves.

Truss stores the variable name. It does not store the webhook URL. Paste the URL only into the runner.

**Disable** turns the connection off. Jobs that use it show **inactive (connection disabled)** and do not fire. A paused job still says **Paused**. **Delete** stays disabled while any job uses the connection. Delete those jobs first.

## Runners

A runner is one place the schedule runs. A second container or a second n8n instance is a second runner.

- **Manual** is the default. You run the schedule in your own tool or an internal app. The runner card exports a `jobs.json` definition (filter, interval, connection name, and env var name). The API key and webhook stay in your tool.
- **Docker** runs the schedule in a container on your machine. Setup lives on the runner card.
- **n8n, Zapier, Make, and Tines** each show a setup checklist per job. Store the API key and the Discord webhook in that product.

**Disable** on a runner is a kill switch for every job on it. **Delete** removes the runner and its jobs. Connections stay.

Editing a runner changes its name and description. The type stays as it was when you created it.

### Docker

Docker setup on the runner card is four steps.

1. **Download files once.** The zip is `compose.yaml` and `env.template`. Adding or editing a job later does not need a new zip.
2. **Fill in `env.template`.** Set `TRUSS_API_KEY` from the API key page. Leave `TRUSS_DELIVERY_REMOTE=1` and `TRUSS_DELIVERY_RUNNER` set to this runner’s name. Set each webhook env var to the Discord webhook URL.
3. **Start it** with `docker compose up -d`.
4. **Test a job** (optional) with `docker compose run --rm agent run-job` and the job name.

After the first download, the runner status is one of:

- **Waiting for first start** — the zip has not been downloaded yet.
- **Restart to apply changes** — a job or connection changed after the last download or restart.
- **Downloaded** — the files match what is saved. This does not mean the container is running.

When you change jobs only, run `docker compose restart`. When you add a new webhook env var, add that name to `env.template`, then run `docker compose up -d --force-recreate`. **I restarted** is in that maintenance section. It records that you applied the current jobs.

**Run without remote config** is a separate download for a machine that cannot call Truss. That zip includes compose, `env.template` (without the remote flag), and the config JSON. Leave `TRUSS_DELIVERY_REMOTE` unset.

### Other runners

n8n, Zapier, Make, and Tines show the steps for that job: schedule, `POST https://api.truss-security.com/product/search` with your API key, and a Discord post that includes titles and ids. Raw indicators are left out. After you apply the steps, choose **Mark applied**. Opening the steps does not clear the change flag.

Manual works the same way with the `jobs.json` download. Download it again after a change, or choose **Mark applied** once your system is updated.

## Jobs

A job is one scheduled search.

- **Filter.** A FilterQL expression, typed in or copied from a saved dashboard filter. Operators are `=`, `!=`, `LIKE`, `AND`, and `OR`. Do not put a webhook URL or any other URL in the filter.
- **Schedule.** Hours or days, from 1 hour through 7 days. The list shows this as “Every 10 hours” or “Every 1 day”.
- **Runner and connection.** The job posts through that connection, on that runner.
- **Pause / Resume.** Pause stops that job. The connection and runner stay as they are.

The job row lists the filter, schedule, runner, connection, and export status. Export status is the runner’s status: whether the runner still needs a download, a restart, or a mark-applied.

Deleting a job does not delete the connection. The runner stays stale until you export it again or mark it applied.

## Asking the assistant

The dashboard AI Assistant can list the connections, runners, and jobs on your account. Ask what you have, and it reads those records: names, filters, schedules, and webhook env var names. It still cannot see webhook URLs or API keys.

## What stays out of Truss

The dashboard keeps the filter, the schedule, the runner, the connection name, and the webhook env var name. The Discord webhook URL and the API key belong on the runner. Do not paste them into a job, a connection, or a filter.
