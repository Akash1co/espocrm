# Week 6 Day 3 Changelog

## EXPLAIN Query Benchmarks

| Query | Before | After |
| --- | ---: | ---: |
| Lead status filter | 14.2ms | 1.1ms |
| User assigned search | 11.8ms | 0.8ms |
| Workflow reminder scan | 18.5ms | 1.5ms |

## Features Built

- Integrated the Groq API using the `llama-3.3-70b-versatile` model in `GroqReminderService.php`.
- Added custom User entity preference metadata.
- Added the client-side view controller in `smart-reminder-preferences.js`.

## Bug Fixes & Known Issues

- Addressed slow workflow queries.
- Fixed field visibility toggle issues.
- Known issue: Groq API rate-limit handling is not yet implemented.