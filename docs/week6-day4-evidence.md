# Week 6 Day 4 Evidence

## 1. Docker Deployment

- Docker command used: `docker compose up -d`
- Container status: `espocrm` healthy, `espocrm-db` healthy, and `espocrm-daemon` running.
- Application URL: http://localhost:8080
- Verification result: HTTP 200 from the application root; EspoCRM login and admin dashboard loaded.
- The repository had no prior Compose file. The added file follows the official EspoCRM Docker Compose layout and pins the application image to `10.0.8`, matching the source tree version.

## 2. Admin Panel

- Admin panel URL: http://localhost:8080
- Verification result: Admin login succeeded and the dashboard loaded.

## 3. CRM Flow

- Lead created: `Akasha Internship Test Lead` (`6ac7c4f09e4bbcf99`), with `akasha.test@example.com` and the Week 6 Day 4 description.
- Opportunity created: `Akasha Internship Test Opportunity` (`6ac7c5301403abce5`), linked to `Akasha Internship Test Account`.
- Account created: `Akasha Internship Test Account` (`6ac7c503c828a44ef`).
- Activity created: Meeting `Akasha Internship Test Meeting` (`6ac7c544190d593aa`), linked to the test account.
- Relationship verified: the Opportunity detail view displayed the linked Account, and the Meeting detail view displayed the linked Account.

## 4. API Testing

- Three successful authenticated GET calls are documented in [week6-day4-api.md](week6-day4-api.md).
- The calls returned HTTP 200 and matched the created Lead, Opportunity, and Account records.

## 5. Git

- Branch: `feat/w6d4-3m-Akasha-G`
- Commit 1: `65bfffcdc5` - `docs: add EspoCRM week 6 day 4 API documentation`
- Commit 2: the deployment and evidence commit containing this file.
- Rebase status: completed with `git fetch upstream` and `git rebase upstream/master`; the configured upstream repository has no `upstream/main` ref.
- Push status: not attempted yet.
- Pull request status: not attempted yet.

## Screenshots To Attach

[SCREENSHOT REQUIRED: Admin panel]

[SCREENSHOT REQUIRED: Lead record]

[SCREENSHOT REQUIRED: Opportunity record]

[SCREENSHOT REQUIRED: Account record]

[SCREENSHOT REQUIRED: Activity record]

[SCREENSHOT REQUIRED: API documentation/result]