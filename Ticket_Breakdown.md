# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Feature: Generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked.

### Ticket #1 - Create a new column named `agent_id` in the Agent table

Description: Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.

AC:

- A new column with the name `agent_id` is available in the Agent table, as primary key
- A new foreign key `agent_id` is available in the Shift table
- The new `agent_id` column in the Agent table is filled with empty values

Note:
- At this moment the column will be filled with empty values. A new ticket will be risen to populate the `agent_id` with their respective data.

Time/effort: 5 points (~1 day)

### Ticket #2 - Populate the new `agent_id` data in the Agent table

Description: Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.

A new column, named `agent_id`, is already created (Ticket #1) and has to be populated with the respective Agent id data in this task. 

A given CSV file containing all the Agents' ids is attached in this ticket. 

AC:

- The Agents' ids are correctly populated and linked with the respective `agent_id` column of the current Agent.

Note:
Time/effort: 8 points (~2 days) - The time/effort depends completely on the number of Agents to be migrated. Therefore, it's necessary to check with the managers if the whole data will be migrated at this point to get a more accurate estimate of the work in this task.

### Ticket #3 - Update the function `getShiftsByFacility` function return the Agent id in metadata.

Description: Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.

A new column, named `agent_id`, is already created (Ticket #1) and populated (Ticket #2) with the respective Agent id. 

In order to generate the report accordingly to what was requested by the Facilities, update the `getShiftsByFacility` to return the Agent id in metadata. 

AC:

- The Agent id is available in the metadata.

Note:
Time/effort: 3 points (~4 hours)