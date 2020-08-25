General:

- [ ] Tag db: doc id = name, entry = colour
- [ ] Event db: doc id = random, tag entry: 2 arrays of strings (one for names (tagNames), one for colours (tagColours))
- [ ] Check for duplicate colours against the tag db

In the app:

- [ ] Read from the tag db
- [ ] Write to tag and event dbs

Notes:

- Tag db does not have to be modified, only when a new tag is created!
- Check tagColours that we will write to event db against the tag db first, and check tagNames against tag document ids too
- tagNames, tagColours -> event db, tags -> tag db
