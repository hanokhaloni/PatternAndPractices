# What to monitor

The following should raise an event/alert:

## Layer 0: The Application

- [ ] Exceptions - if an exception exists in logs.
  
## Layer 1: The Process

- [ ] process for cassabdra db is UP Status ("created", "running", "terminated"), and consumed resources (memory, cpu and network).
- [ ] process for tomee is UP Status ("created", "running", "terminated"), and consumed resources (memory, cpu and network).

## Layer 2: The Server

- [ ] CPU at 80%
- [ ] HD at 90%
- [ ] RAM at 80%

## Layer 4: External Dependencies

- [ ] Domain Names - DNS renewal dates can creep up and cause severe headaches if forgotten (just ask Microsoft). Mark your calendars!
- [ ] SSL certificates - these also expire, with consequences almost as severe as DNS, and certificate providers are not as proactive with expiration warnings as DNS providers are.
- [ ] NTP Clock Offset above 100ms (Time skew alerts).

## Layer 5: The User

- [ ] 200 OK for first access (login page, main page etc.).
- [ ] 200 OK + some payload for a simple API call.
- [ ] 200 OK + payload with version number of the server.
- [ ] 200 OK + predefined response for a general service (to verify configuration etc).
