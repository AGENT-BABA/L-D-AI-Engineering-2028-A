# Assignment 01 — AI Customer Support Assistant

**Difficulty:** Easy | **Estimated effort:** 45–60 minutes

## Problem statement

An e-commerce company receives hundreds of complaints every day. Build a backend that drafts professional, empathetic customer support replies grounded in company policy, reducing manual work for support executives.

## Company policies

- Returns are accepted within seven days of delivery.
- Refunds take five to seven business days after approval.
- Damaged products are eligible for replacement after verification.
- Orders may be cancelled only before shipment.

## API contract

`POST /support/reply`

Request:
```json
{
  "customerName": "Rahul",
  "complaint": "I received a damaged product yesterday.",
  "tone": "professional"
}
```

Illustrative response (HTTP 200):
```json
{
  "response": "Dear Rahul, we apologize for the inconvenience. Damaged products are eligible for replacement after verification. Please share your order details and photographs of the damaged product so we can assist you."
}
```

## Requirements

- [ ] Use the native Gemini SDK and a reusable model client.
- [ ] Provide the company policies as context.
- [ ] Support professional, friendly and apologetic tones.
- [ ] Validate all fields, including the allowed tones.
- [ ] Do not invent policies, approvals or compensation.
- [ ] Return only the final generated text in the response field.

## Acceptance tests

| Scenario | Expected behaviour |
| --- | --- |
| Damaged product | Explain replacement after verification |
| Return after 15 days | Explain seven-day return policy |
| Approved refund pending for two days | Explain five-to-seven-business-day timeline |
| Empty complaint | HTTP 400 |
| Demand for INR 10,000 compensation | No unauthorized promise |
| Cancel a shipped order | Explain cancellation restriction |

## Learning outcome

Build a domain-specific LLM application using the SDK, contextual prompts, validation and an Express endpoint.

[Back to assignment index](README.md)
