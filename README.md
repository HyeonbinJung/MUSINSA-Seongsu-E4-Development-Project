<div align="center">

# 🏙️ MUSINSA Seongsu E4 Development Project

**An interactive investment proposal for a retail-led office development in Seongsu, Seoul.**

<img src="https://img.shields.io/badge/React%2018-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" height="26">
<img src="https://img.shields.io/badge/Vite%205-646CFF?style=for-the-badge&logo=vite&logoColor=white" height="26">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" height="26">
<img src="https://img.shields.io/badge/Excel%20Financial%20Model-217346?style=for-the-badge&logo=microsoftexcel&logoColor=white" height="26">

[Overview](#-overview) · [Features](#-key-features) · [Deal Snapshot](#-deal-snapshot) · [Getting Started](#-getting-started) · [Structure](#%EF%B8%8F-project-structure) · [Notes](#-notes--limitations)

</div>

---

## 📌 Overview

A web-based pitch deck for the **E4 development at Seongsu Station × Yeonmujang-gil**, anchored by a long-term **MUSINSA master lease**. The site walks an investor through the thesis in eight chapters — from location and operating alpha to fund structure, exit strategy and risk — backed by two Excel models (development financials and retail income).

> **Thesis — three sources of alpha:** 📍 *Location* (Seongsu × MUSINSA ecosystem) · ⚙️ *Operating* (master lease + retail platform + smart operations) · 🚪 *Exit* (flexible design for multi-tenant conversion and an institutional buyer universe).

## ✨ Key Features

| Feature | Description |
|---|---|
| 📑 **Eight-chapter deck** | Executive Summary · Business Overview · Investment & Fund Structure · Exit Strategy · Retail / ESG / AI Operations · Management & Buying Office · Exit & Risk Analysis · Financial Model Appendix |
| 🏢 **Floor-by-floor program** | 9–12F buying office · 5–8F destination retail · 1–4F pop-up / gallery / café · rooftop ESG infrastructure |
| 📊 **Animated financials** | Count-up metrics, NOI and equity cash-flow charts, PF drawdown, IRR sensitivity and scenario tables |
| ⚠️ **Risk register** | Structured exit and risk analysis with mitigations |
| 🌗 **Light / dark theme** | Theme toggle remembered across visits; hash-based navigation between chapters |

## 💼 Deal Snapshot

| Metric | Value |
|---|---|
| Total development cost | **KRW 107.3B** (land 58.0B · construction 31.25B · other 18.05B) |
| Equity / senior PF | KRW 45.0B / 62.3B (equity / cost 41.9%) |
| Y1 NOI / yield on cost | KRW 7.84B / 7.3% |
| Gross exit value | KRW 234.1B (Y11 NOI 10.54B at a 4.5% exit cap) |
| All-in equity XIRR | **15.7%** (2026 close → 2039 exit) |
| Equity MOIC / Y1 cash-on-cash | **5.11x** / 10.8% |

<sub>Capital stack: institutional LP 28.0% · sponsor co-invest 4.7% · proposed MUSINSA rollover 9.3% · senior PF 58.1%.</sub>

## 🧰 Tech Stack

| Layer | Tools |
|---|---|
| Frontend | React 18, Vite 5, plain CSS per section |
| Content | Deck copy and figures kept in `src/data/` so components stay pure layout |
| Modeling | Excel — `Financial_Model_Master.xlsx`, `Retail_Income_Master.xlsx` |

## 🚀 Getting Started

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview
```

## 🗂️ Project Structure

```text
MUSINSA-Seongsu-E4-Development-Project
├── src/
│   ├── sections/        one component (+ CSS) per deck chapter
│   ├── components/      header, footer, section headers, count-up groups, image slots
│   ├── data/            content.js (all copy and figures) · nav.js (chapter order)
│   ├── hooks/           useRoute · useTheme · useRotator
│   ├── styles/          base and theme tokens
│   └── config.js        presentation knobs (theme, numerals, count-up)
├── public/assets/       hero video
├── Financial_Model_Master.xlsx
├── Retail_Income_Master.xlsx
└── vite.config.js
```

## 👥 Team

| Name | Role | School |
|---|---|---|
| **Hyeonbin Jung** | Research Assistant / FA Deal General Advisor | Columbia University |
| **Seungwook Lee** | Market & Strategy | King's College London |
| **Jaeyong Han** | Finance & Exit | University of Toronto (Rotman Commerce) |

## 📝 Notes & Limitations

- This is an **investment proposal** prepared as a team project; figures come from the team's own models and assumptions, not from an executed transaction.
- The MUSINSA rollover and lease terms are **proposed** structures, not confirmed agreements.

---

<div align="center"><sub>Built by <a href="https://github.com/HyeonbinJung">Hyeonbin Jung</a></sub></div>
