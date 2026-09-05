---
title: "ReAct vs ReWOO vs Plan-and-Execute"
description: "A comparison of three useful control loops for tool-using LLM applications."
date: 2026-08-16
tags: [LLM, AI Agent, Architecture]
category: AI / Agent
---

## ReAct

ReAct alternates between reasoning and tool use. It is flexible for exploratory work, but each observation can cause another model turn.

## ReWOO

ReWOO plans tool work before executing it, allowing independent calls to run without keeping every intermediate result in the model context.

## Plan-and-execute

This pattern separates a planner from an executor. It is a good fit when plans are stable and execution benefits from stricter, deterministic steps.
