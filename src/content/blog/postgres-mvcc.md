---
title: "PostgreSQL MVCC Explained"
description: "A practical route from tuple metadata and xmin/xmax to snapshots and vacuum."
date: 2026-09-05
tags: [PostgreSQL, Database, MVCC]
category: Database
---

## The central idea

PostgreSQL readers do not usually wait for writers. Instead of changing a row in place, an update creates a new tuple version. A transaction's snapshot decides which version is visible.

## xmin and xmax

Every tuple records the transaction that created it in `xmin`. Deleting or replacing a tuple records another transaction in `xmax`. Visibility is therefore a question: did the creating transaction commit before my snapshot, and has the deleting transaction committed within it?

```sql
SELECT xmin, xmax, id, status
FROM orders
WHERE id = 42;
```

## Why vacuum matters

Old tuple versions cannot be reclaimed until no active transaction could still see them. Vacuum removes those dead tuples and keeps table bloat under control.
