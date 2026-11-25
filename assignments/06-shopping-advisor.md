# Assignment 06 — AI Shopping Advisor and Market Comparison Agent

**Difficulty:** Hard | **Estimated effort:** 2–3 hours

## Problem statement

Shoppers struggle to find products that fit their budget, check availability and compare store prices against external offers. Build an agent that combines internal catalogue lookups with web research when requested.

## Starter data

```javascript
const products = [
  { id: 1, name: "Lenovo IdeaPad", category: "laptop", price: 45000, stock: 8, ram: "8GB" },
  { id: 2, name: "ASUS Vivobook", category: "laptop", price: 55000, stock: 5, ram: "16GB" },
  { id: 3, name: "MacBook Air", category: "laptop", price: 90000, stock: 3, ram: "16GB" },
  { id: 4, name: "Dell Inspiron", category: "laptop", price: 60000, stock: 0, ram: "16GB" },
  { id: 5, name: "Logitech Mouse", category: "accessories", price: 1500, stock: 20 },
  { id: 6, name: "Mechanical Keyboard", category: "accessories", price: 3500, stock: 12 }
];
```

All store prices and stock values are fictional and in INR.

## Tool contracts

| Tool | Type | Input / responsibility |
| --- | --- | --- |
| search_product | Custom | productName: string; retrieve product |
| filter_products | Custom | category: string, maxPrice: number (optional), minRamGB: number (optional); return matching products including stock |
| check_stock | Custom | productName: string; return availability |
| Tavily Search | External | Research external prices and specifications |

## API contract

`POST /shopping/chat`

```json
{"prompt":"I am a software engineering student looking for a laptop within 60000 with at least 16GB RAM. What should I buy from your store?"}
```

Illustrative response:
```json
{"response":"The ASUS Vivobook costs INR 55,000, has 16GB RAM and is in stock. The Dell Inspiron also meets the budget and RAM requirements but is out of stock."}
```

## Requirements

- [ ] Implement three independent custom tools with Zod schemas.
- [ ] Register the custom tools and Tavily with one agent.
- [ ] Apply category, budget and RAM filters in JavaScript; maxPrice is inclusive.
- [ ] Do not recommend out-of-stock products as immediately purchasable.
- [ ] Use external search for current market research or explicit comparisons, not routine store lookups.
- [ ] Distinguish store prices from external prices and include actual retrieved source links.
- [ ] Do not claim exact like-for-like comparisons if model identifiers or configurations are missing.
- [ ] Support multiple calls and return only the final text.

## Acceptance tests

| Prompt | Expected behaviour |
| --- | --- |
| Price of MacBook Air? | Internal lookup: INR 90,000 |
| Laptops under or equal to INR 60,000? | Lenovo, ASUS and Dell; disclose stock |
| Is Dell Inspiron available? | Out of stock |
| Recommend an available 16GB laptop within INR 60,000 | ASUS Vivobook |
| Compare ASUS Vivobook with online prices | Internal tool and Tavily; disclose model uncertainty |
| Laptop and accessories within INR 60,000 | Multiple lookups and budget-aware suggestion |
| What is an operating system? | Direct LLM answer |

**Bonus:** Implement a tool that calculates the combined price of multiple selected products and checks the budget.

## Learning outcome

Build an applied agent integrating internal business logic, external research and multi-tool coordination.

[Back to assignment index](README.md)
