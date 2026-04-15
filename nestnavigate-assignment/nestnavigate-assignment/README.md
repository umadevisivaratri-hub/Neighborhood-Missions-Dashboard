# NestNavigate Gamification Prototype

## Overview

This repository contains a prototype for a new gamification feature called **Neighborhood Missions**.

The goal of this feature is to improve engagement by introducing daily and weekly missions that connect lessons, the Grow Your Nest minigame, coins, and neighborhood progression.

---

## Platform Exploration

During exploration of the NestNavigate platform I reviewed:

- lesson modules
- lesson completion flow
- Grow Your Nest minigame
- question card feedback
- coin rewards
- neighborhood interface

### Key Observations

1. Completing lessons unlocks the Grow Your Nest minigame.
2. The minigame reinforces learning by asking questions related to lesson content.
3. Coins exist but are not strongly tied to daily engagement loops.
4. The platform would benefit from a broader progression system encouraging daily learning.

---

## Opportunity Summary

The current NestNavigate experience already includes strong gamification elements through the Grow Your Nest minigame and visual learning environment. However, the engagement loop primarily activates after lesson completion and does not strongly encourage users to return consistently. This creates an opportunity to introduce a lightweight progression layer that connects lessons, minigame participation, and rewards into a daily engagement system. By adding structured missions and visible neighborhood progression, the platform can transform individual learning activities into a continuous and motivating experience that encourages users to build daily learning habits.
---

## Proposed Feature

Neighborhood Missions introduces daily and weekly missions tied to educational actions.

### Example Missions

- Finish one lesson
- Answer three Grow Your Nest questions
- Maintain a learning streak
- Explore the rewards shop

Completing missions rewards coins and contributes to neighborhood progression.

---

## Setup Instructions

Install dependencies:

```bash
npm install

Run development server:

npm run dev

Open:

http://localhost:5173


---

## Technical Architecture

- React + TypeScript
- Vite for development
- Component-based UI
- Mock data to simulate platform behavior

Key components:

- Header
- MissionCard
- ProgressOverview
- RewardToast

---

## Future Improvements

Possible future enhancements:

- daily mission refresh system
- achievement badges
- leaderboard
- animated neighborhood upgrades
- personalized mission generation