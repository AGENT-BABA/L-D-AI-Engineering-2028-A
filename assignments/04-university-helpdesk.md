# Assignment 04 — AI University Helpdesk Agent

**Difficulty:** Medium | **Estimated effort:** 90 minutes

## Problem statement

University administrators repeatedly answer questions about deadlines, attendance and academic policies. Build a helpdesk that retrieves internal university information instead of guessing.

## Starter data

The following is fictional university data for the assignment.

```javascript
const universityInformation = [
  { topic: "attendance", information: "Students must maintain a minimum attendance of 75%." },
  { topic: "examination", information: "End-term examinations begin on December 15." },
  { topic: "fees", information: "The semester fee payment deadline is December 5." },
  { topic: "library", information: "The library is open from 8 AM to 10 PM." },
  { topic: "assignments", information: "Late submissions carry a penalty of 10% per day." },
  { topic: "scholarship", information: "Students with a CGPA above 9 are eligible to apply for a merit scholarship." }
];
```

## Tool contract

| Name | Input | Output |
| --- | --- | --- |
| get_university_information | topic: string | Matching policy or a not-found result |

Implement the lookup function yourself and wrap it using LangChain's tool helper and a Zod schema.

## API contract

`POST /helpdesk/chat`

```json
{"prompt":"What happens if my attendance is 70%?"}
```

Illustrative response:
```json
{"response":"The university requires at least 75% attendance. Your attendance of 70% is below the threshold. Contact academic administration for guidance."}
```

## Requirements

- [ ] Implement one custom tool with a clear name, description and Zod schema.
- [ ] Register the tool with an agent and allow automatic tool selection.
- [ ] Support natural-language paraphrases and questions about multiple topics.
- [ ] Handle missing information without inventing policies.
- [ ] Log actual tool executions.
- [ ] Do not use Tavily; university facts must come from the custom tool.

## Acceptance tests

| Prompt | Expected behaviour |
| --- | --- |
| Can I enter the library at 9 PM? | Yes, within stated hours |
| When must I pay fees? | December 5 |
| Is 70% attendance enough? | Below required 75% |
| When are exams and fees due? | Retrieve both topics |
| What is the hostel Wi-Fi password? | Information unavailable |
| Am I guaranteed a scholarship with 9.2 CGPA? | Eligible to apply, not guaranteed |

## Learning outcome

Expose application-specific information to an AI agent through a validated custom tool.

[Back to assignment index](README.md)
