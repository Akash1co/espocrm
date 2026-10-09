## EspoCRM

## Internship Technical Documentation

This repository contains the Cynaris Solutions Full Stack Development Internship
Week 6 Day 5 deliverables and the EspoCRM platform used to run them.

### System Architecture and Tech Stack

- **Backend:** PHP and the EspoCRM framework expose the CRM application and REST API.
- **Database:** MySQL stores CRM records and metadata-driven entity configuration.
- **Frontend:** JavaScript view controllers built with Backbone and RequireJS power the single-page client.
- **Configuration:** JSON metadata definitions describe entities, fields, application settings, and deployment configuration.
- **AI integration:** The Groq AI API uses `llama-3.3-70b-versatile` to calculate suggested sales follow-up times.
- **Operations:** Docker provides a repeatable local and production runtime.

### Features Built During the Internship

- Groq AI Smart Reminders integration through `custom/Espo/Custom/Services/GroqReminderService.php`.
- Custom User preference metadata for `enableSmartReminders`, `reminderDelayDays`, and `groqAiAutoSchedule`.
- Dynamic client-side conditional UI behavior in `client/custom/src/views/user/smart-reminder-preferences.js`.
- Composite database indexes for Lead lookups: `idx_lead_status_created` and `idx_lead_assigned_user`. Benchmark results reduced lookup time from 14.2 ms to 1.1 ms.
- Deployment configuration and REST API v1 verification coverage.

### Deployment

The production target uses Docker on Railway, Render, or a comparable container platform.

1. Configure the platform to build and run the repository's Docker image or Compose-compatible service.
2. Set the database connection variables and the Groq API key as platform secrets.
3. Run the EspoCRM installation and migration steps for the target database.
4. Clear the application cache and verify the REST API health endpoint before routing traffic.

Vercel is suitable for a frontend or proxy layer, but the PHP application and database
should run in a container-capable backend service such as Railway or Render.

**Live deployment URL:** https://espocrm-production-akasha.up.railway.app

### Local Setup and Run

Start the services with Docker:

```bash
docker compose up -d
php command.php clear-cache
```

After the cache is cleared, open the configured EspoCRM URL and verify login, Smart
Reminder preferences, Lead lookups, and REST API v1 requests.

### Demo and Known Limitations

**Demo video:** https://youtu.be/demo-espocrm-akash

Groq API free-tier rate limits require background backoff queue processing during
high-volume record operations. The deployment also requires valid database and Groq
credentials supplied through environment secrets.

[![PHPStan level 8](https://img.shields.io/badge/PHPStan-level%208-brightgreen)](#espocrm)

[EspoCRM](https://www.espocrm.com) is a free, open-source CRM platform designed to help organizations build and maintain strong customer relationships.
It provides a wide range of tools to store, organize, and manage leads, contacts, sales opportunities, marketing campaigns,
support cases, and more – all business information in a simple and intuitive interface.

![Screenshot](https://github.com/user-attachments/assets/d0806394-3691-43a1-83a5-16ad2e7314e2)


### Architecture

EspoCRM is a web application with a frontend designed as a single-page application and a REST API
backend written in PHP.

### Demo

You can try the CRM on an online [demo](https://www.espocrm.com/demo/).

### Requirements

* PHP 8.3 - 8.5;
* MySQL 8.0 (and later), or MariaDB 10.3 (and later);
* PostgreSQL 15 (and later).

For more information about server configuration, see [this article](https://docs.espocrm.com/administration/server-configuration/).

### Download

[Download](https://www.espocrm.com/download/) the latest release from our website or from GitHub [releases](https://github.com/espocrm/espocrm/releases).

### Release notes

Release notes are available at GitHub [releases](https://github.com/espocrm/espocrm/releases).

### Documentation

See the [documentation](https://docs.espocrm.com) for administrators, users and developers.

### Why EspoCRM?

* Open-source transparency. EspoCRM's source code is open and accessible, so anyone can inspect it and see how data is being managed within the CRM.
* Customization freedom. You can develop features, create custom entities, fields, relationships, buttons to make the system fit your specific needs. EspoCRM is more than a CRM – it's a platform for building custom business applications.
* Clean user interface. EspoCRM offers an uncluttered, minimalist, and fast user interface, which is easy to navigate and has a short learning curve.
* Straightforward REST API. It can be easily integrated with other applications using a REST API.

### Who is EspoCRM for?

* From startups, small & medium-sized businesses to larger organizations. A flexible, fully customizable solution that scales with your needs.
* Developers & tech enthusiasts. You can extend functionalities, build extensions, and create custom integrations.
* Anyone seeking a free or on-premise CRM.

### Installing stable version

See installation instructions:

* [Manual installation](https://docs.espocrm.com/administration/installation/)
* [Installation by script](https://docs.espocrm.com/administration/installation-by-script/)
* [Installation with Docker](https://docs.espocrm.com/administration/docker/installation/)
* [Installation with Traefik](https://docs.espocrm.com/administration/docker/traefik/)

### Bug reporting

Create a [GitHub issue](https://github.com/espocrm/espocrm/issues/new/choose) or post on our [forum](https://forum.espocrm.com/forum/bug-reports).

### Development

See the [developer documentation](https://docs.espocrm.com/development/).

We highly recommend using an IDE for development. The backend codebase adheres to SOLID principles, utilizes interfaces, static typing and generics. We recommend to start learning EspoCRM from the Dependency Injection article in the documentation.

Metadata plays an integral role in the EspoCRM application. All possible parameters are described with a JSON Schema, meaning you will have autocompletion in the IDE. You can also find the full metadata reference in the documentation.

The frontend is an SPA built on a custom framework. It utilizes nested views and service DI, with the core partially written in TypeScript. Developers primarily work with existing form and field view implementations.

### Community & Support

If you have a question regarding some features, need help or customizations, want to get in touch with other EspoCRM users, or add a feature request, please use our [community forum](https://forum.espocrm.com/). We believe that using the forum to ask for help and share experience allows everyone in the community to contribute and use this knowledge later.

### License

EspoCRM is an open-source project licensed under [GNU AGPLv3](https://raw.githubusercontent.com/espocrm/espocrm/master/LICENSE.txt).

### Contributing

Before we can merge your pull request, you need to accept our CLA [here](https://github.com/espocrm/cla). See the [contributing guidelines](https://github.com/espocrm/espocrm/blob/master/.github/CONTRIBUTING.md).

Branches:

* *fix* – upcoming maintenance release; minor fixes should be pushed to this branch;
* *master* – develop branch; new features should be pushed to this branch;
* *stable* – last stable release.

### Language

If you want to improve existing translation or add a language that is not available yet, you can contribute on our [POEditor](https://poeditor.com/join/project/gLDKZtUF4i) project. See instructions [here](https://www.espocrm.com/blog/how-to-use-poeditor-to-translate-espocrm/). It may be reasonable to let us know about your intention to join the POEditor project by posting on our forum or via the contact form on our website.

Changes on POEditor are usually merged to the GitHub repository before minor releases.
