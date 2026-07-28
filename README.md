# SmartCropPlanner (Capstone Project)

## Project Overview

SmartCropPlanner helps small-scale farmers plan crop cycles by providing crop recommendations, planting schedules, and resource estimates based on local conditions and crop requirements. This repository contains the Capstone implementation created for the S93 cohort.

## Goals

- Provide an easy-to-use planner for crop selection and scheduling.
- Support day-by-day guidance and an implementation plan for reproducible development.
- Demonstrate a working full‑stack prototype and documentation for evaluation.

## Suggested Tech Stack

- Frontend: React (or any preferred JS framework)
- Backend: Node.js + Express (or Flask/Django)
- Database: MongoDB / PostgreSQL
- Optional: Docker for local development

> Update the stack below if you are using different technologies.

## Setup (local)

Prerequisites:
- Git
- Node.js (16+) and npm/yarn (if using Node)
- Python 3.8+ (if using a Python backend)
- Docker (optional)

Quick start (example Node/React):

1. Clone the repo

   git clone https://github.com/kalviumcommunity/S93_MidhunPraveen_Capstone_SmartCropPlanner.git
   cd S93_MidhunPraveen_Capstone_SmartCropPlanner

2. Install backend dependencies

   cd backend
   npm install

3. Install frontend dependencies

   cd ../frontend
   npm install

4. Run services

   # In backend folder
   npm start

   # In frontend folder
   npm start

5. Open http://localhost:3000 (or configured port)


## Project Structure

- backend/ — API, business logic, models
- frontend/ — UI components and pages
- docs/ — design notes, dataset references, and test cases
- data/ — sample data and import scripts


## Day-by-day Implementation Plan

Day 1 — Project setup & planning
- Create repository structure and default branch
- Add this README and a simple project board (issues)
- Define scope and success criteria

Day 2 — Data model & backend skeleton
- Design core data models (Crop, Field, Schedule)
- Implement basic API endpoints (CRUD for crops and schedules)
- Add seed/sample data

Day 3 — Frontend skeleton & routing
- Create main pages: Dashboard, Planner, Crop Library, Settings
- Wire up routing and navigation
- Fetch sample data from backend endpoints

Day 4 — Planner core features
- Implement crop recommendation logic and planting schedule generator
- Allow users to add fields and choose crops
- Display generated schedules on the dashboard

Day 5 — Persistence & integrations
- Save schedules and user preferences to the database
- Add import/export of data (CSV/JSON)
- (Optional) Integrate weather or soil data API for smarter recommendations

Day 6 — Tests & validation
- Add unit tests for backend logic and recommendation engine
- Add basic UI tests and manual acceptance criteria
- Run end-to-end smoke tests

Day 7 — Polish & documentation
- Improve UI/UX, fix bugs from testing
- Finalize README and contribution guidelines
- Prepare demo and presentation materials


## Contributing

- Create issues for features/bugs
- Open PRs against `main` from feature branches
- Follow code style and add tests for new logic


## Authors

- Midhun Praveen (RMidhunPraveen)
- kalviumcommunity


## License

Specify a license (e.g., MIT) in LICENSE file.
