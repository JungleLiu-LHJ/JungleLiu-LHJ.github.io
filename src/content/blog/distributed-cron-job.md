---
title: "Building a Distributed Cron Job System"
description: "How to make scheduled work reliable when more than one worker is running."
date: 2026-08-28
tags: [Distributed Systems, Scheduling, Reliability]
category: Distributed Systems
---

## Start with the failure model

A cron expression only answers when work should be eligible to run. A production scheduler must also answer who owns a run, what happens after a crash, and how duplicate execution is handled.

## Lease, execute, record

Use a durable job record and a short lease. A worker claims an eligible run atomically, renews its lease while running, and records the result using an idempotency key.

## Prefer at-least-once with idempotency

Exactly-once delivery is rarely the useful promise. Make the external effect idempotent, then retries become safe and recovery is straightforward.
