---
title: DLD Lab 4.1 and 4.2 (Circuit Design with K-Map solution )
---



#### 3-Variable K-Map Solution (Step-by-Step, in 2 parts)

**"Part 1 — Problem Setup"**

Given,
- **Minterms:** \( \Sigma m(1,2,4,5,7) \)  
- **Don’t cares:** *(none)*  
- **Variables:** \(a, b, c\)  
- **Method:** Karnaugh Map (K-map)

**K-map layout (Gray code on columns \(bc\): 00, 01, 11, 10)**



*Cell–minterm mapping (row \(a=0\): m0, m1, m3, m2; row \(a=1\): m4, m5, m7, m6).*


**Part 2 — Grouping & Simplification:**

**Group-1:** 2-cell grouping \((5,7)\)  
Cells: row \(a=1\), cols \(bc=01,11\) → \(b\) changes, \(a=1\), \(c=1\)  
- **Term:** `ac`

**Group-2:** 2-cell grouping \((4,5)\)  
Cells: row \(a=1\), cols \(bc=00,01\) → \(c\) changes, \(a=1\), \(b=0\)  
- **Term:** `ab'`

**Group-3:** 2-cell grouping \((1,5)\)  
Cells: col \(bc=01\), rows \(a=0,1\) → \(a\) changes, \(b=0\), \(c=1\)  
- **Term:** `b'c`

**Group-4:** 1-cell grouping \((2)\)  
Cell: \(m_2\) at \(a=0,b=1,c=0\)  
- **Term:** `a'bc'`

**Final minimized SOP:**

```text
F(a,b,c) = ac + ab' + b'c + a'bc'
```

**Coverage check (by minterm):**
- \(m_5, m_7 \rightarrow ac\)
- \(m_4, m_5 \rightarrow ab'\)
- \(m_1, m_5 \rightarrow b'c\)
- \(m_2 \rightarrow a'bc'\)


# DLD Lab 4.2 (Circuit Design with K-Map solution )
---

![[DLD Lab 4.2.png]]
