# Features

## Checklist
  - [ ] CRUD

### Items

- [ ] CRUD
- [ ] check / uncheck
- [ ] nested level
  - [ ] auto check parent when all sub items checked
- [ ] drag to reorder the items

  - [ ] warning if the list name is not unique in all active lists when create or update the list name

## Template
  - [ ] CRUD
  - [ ] popup error message if the template name is not unique
  - [ ] user can choose template when create new check list

# Design

## Data Structer

### CheckList

```json
{
  "id": "uuid",
  "name": "string(128)",
  "status": "unfinished/finished",
  "content": [
    {
      
    },
    {

    }
  ]
}
```

## Offline Sync

Generate uuid and set it to entities' id property, send operation log to back end to sync data.

https://developer.mozilla.org/en-US/docs/Web/API/Background_Synchronization_API#browser_compatibility

# Log

- [ ] [Phase 1] user interface
- [ ] [Phase 2] send operation logs to back end to storage data
- [ ] [Phase 3] 
