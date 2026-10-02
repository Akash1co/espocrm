# Week 5 Day 5 Notes — CRM Record Creation & REST API Exploration

## 1. CRM UI Record Workflow
- **Lead Created:** Mr. Akash Tester (Email: akash.tester@example.com, Account Name: Akash Corp)
- **Conversion Completed:** Converted Lead into:
  - **Account:** Akash Corp
  - **Contact:** Akash Tester
  - **Opportunity:** Akash Corp Deal
- **Activity Logged:** Linked Call record under Akash Corp Account timeline.

## 2. REST API Calls (/api/v1/)
Executed and validated 3 GET calls against standard entity endpoints:

1. **GET /api/v1/Account**
   - **Response:** 200 OK
   - **Output:** Returns JSON list containing Akash Corp account metadata and total record counts.

2. **GET /api/v1/Lead**
   - **Response:** 200 OK
   - **Output:** Returns JSON list containing Akash Tester with status updated to Converted.

3. **GET /api/v1/Opportunity**
   - **Response:** 200 OK
   - **Output:** Returns JSON list containing Akash Corp Deal associated with the converted account.
