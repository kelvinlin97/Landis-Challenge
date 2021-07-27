# MVP
A fully deployed dashboard with two pages and an API setup.

# Wireframe

[Wireframe Link](https://www.figma.com/file/4zJMATHRd2xTXg72PIY8N5/Landis-Coding-Challenge?node-id=0%3A1)

# Database
At first, we contemplated using IndexedDB as the JSON data file was neither sensitive nor relational. However, after seeing Postgres' JSONB support specifically for jsonl files with helpful tooling like indexing, we decided to use Postgres to store our data and communicated with it using express. 

# TODO/Requirements
1. Setup DB using Postgresql RDBMS and load accounts json files
2. Setup Express => Create endpoints for initial load of user accounts
3. Add component unit tests
4. First component page => Shows accounts as cards => Card has email, phone number, indicator of how close account is to being able to obtain a mortgage => User is close to mortgage based on credit score (credit), current savings balance (balance)
5. Second component page => Analytical overview with charts, tables, etc. to show interesting statistics about the accounts (e.g. chart showing how many accounts fall into indicator categories )
