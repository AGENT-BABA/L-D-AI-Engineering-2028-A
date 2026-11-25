# Assignment 03 — AI Career Research Assistant

**Difficulty:** Medium | **Estimated effort:** 60–90 minutes

## Problem statement

Students preparing for software roles struggle to identify current industry requirements. Build an assistant that researches recent job requirements, compares them with a student's existing skills and produces a practical learning roadmap.

## API contract

`POST /career/analyze`

```json
{
  "targetRole": "Backend Developer",
  "currentSkills": ["JavaScript", "Node.js", "Express", "MongoDB"],
  "experienceLevel": "Fresher",
  "location": "India"
}
```

Return HTTP 200 with a JSON object containing a single `response` string. The response must include:

1. Current market requirements from search.
2. Existing strengths.
3. Skill gaps and priorities.
4. A four-week learning roadmap.
5. Project recommendations.
6. Relevant source URLs actually retrieved through search.

## Requirements

- [ ] Use LangChain `createAgent()` and Tavily Search.
- [ ] Validate required fields and ensure currentSkills is an array of strings (an empty array is allowed).
- [ ] Research current requirements before making market claims.
- [ ] Compare findings with the user's skills and location.
- [ ] Do not fabricate vacancies, statistics or links.
- [ ] Disclose insufficient evidence or search failure.
- [ ] Return only the final agent text, not intermediate tool messages.

## Acceptance tests

| Scenario | Expected behaviour |
| --- | --- |
| Frontend role, React skills | Frontend-specific roadmap |
| Backend role, Node.js skills | Backend-specific roadmap |
| AI Engineer, no AI skills | Beginner-friendly plan |
| Different target location | Location-relevant research |
| Search failure | Clear error or disclosure |
| Missing target role | HTTP 400 |

**Bonus:** Accept weeksAvailable and adapt the roadmap.

## Learning outcome

Understand search-enabled agents and grounding recommendations in retrieved information.

[Back to assignment index](README.md)
