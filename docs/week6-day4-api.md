# Week 6 Day 4 API Testing

The running instance was verified at `http://localhost:8080/api/v1/`.
Authentication used the EspoCRM `Espo-Authorization` header with an access token obtained through the documented `GET App/user` flow. Credentials and tokens are intentionally omitted.

| # | Method | Endpoint | Purpose | Result |
|---|---|---|---|---|
| 1 | GET | `/api/v1/Lead` | Retrieve Lead records and verify the internship test lead | HTTP 200; matched `Akasha Internship Test Lead` (`6ac7c4f09e4bbcf99`) |
| 2 | GET | `/api/v1/Opportunity` | Retrieve Opportunity records and verify the internship test opportunity | HTTP 200; matched `Akasha Internship Test Opportunity` (`6ac7c5301403abce5`) |
| 3 | GET | `/api/v1/Account` | Retrieve Account records and verify the internship test account | HTTP 200; matched `Akasha Internship Test Account` (`6ac7c503c828a44ef`) |

All three calls were executed successfully against the local Docker deployment.