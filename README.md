# Admin Dashboard - User Management Interface

## Overview

This Admin Dashboard provides a user interface for admins to view, edit, and delete users. The users are retrieved via an API, and the UI includes features such as searching, pagination, row editing, and batch deletion.

## Functionalities

1. **Column Titles and Styling:**
   - Column titles are designed to stand out from the entries for easy identification.

2. **Search Bar:**
   - Use the search bar to filter users based on any property.
   - Placeholder text starts with "Search."
   - You can trigger the search either by clicking the search icon or pressing ENTER.

3. **Row Editing:**
   - Click the "Edit" icon in a row to enable in-place editing.
   - After editing, save the changes by navigating away from the edited field.

4. **Row Deletion:**
   - To delete a single row, select the row and click the "Delete" button in that row (bin icon).
   - To delete multiple selected rows, use the "Delete Selected" button at the bottom left.
   - A row must be selected before attempting deletion.

5. **Pagination:**
   - Pagination is implemented, displaying 10 rows per page.
   - Buttons at the bottom allow you to navigate to the first, previous, next, or last page.
   - Pagination updates dynamically based on search/filtering results.
   - If there are, for example, 25 records matching a search query, pagination buttons will go up to page 3.

6. **Row Selection:**
   - Use the checkbox at the top left to select or deselect all displayed rows on the current page.
   - Selected rows are highlighted with a grayish background color.

## API Endpoint

- **Request Type:** GET
- **Endpoint:** [https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json](https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json)

## Sample Response

```json
[
  {
    "id": "1",
    "name": "Aaron Miles",
    "email": "aaron@mailinator.com",
    "role": "member"
  },
  {
    "id": "2",
    "name": "Aishwarya Naik",
    "email": "aishwarya@mailinator.com",
    "role": "member"
  },
  {
    "id": "3",
    "name": "Arvind Kumar",
    "email": "arvind@mailinator.com",
    "role": "admin"
  }
]
```
##Deployed Link:
https://admin-dashboard797.netlify.app/
