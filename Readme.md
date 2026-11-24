<div align="center">

<img src="https://raw.githubusercontent.com/Studio1HQ/Studio1HQ/main/assets/banners/linearstyleEditor-velt.webp" alt="Linear-Style Issue Page with Velt: A Linear-style issue page with a Tiptap editor and Velt comments" width="100%" />

<br />
<br />

# Linear-Style Issue Page with Velt

### A Linear-style issue page with a Tiptap editor and Velt comments

A Next.js clone of a Linear issue page with a Tiptap rich text composer, using Velt inline comments, an inline comments section, a sidebar, presence and notifications.

<br />

[![Built by Studio1](https://img.shields.io/badge/Built_by_Studio1-f97316?style=for-the-badge&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNjAgMTYwIiBmaWxsPSJub25lIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgMzVDMCAxNi42ODA3IDE0LjA3NDQgMS42NDg0NCAzMiAwLjEyNjk1M1YxNDFINTEuMDUyM0M1Mi40MzA4IDEzNy4zNDQgNTQuNzQ0NiAxMzMuNjg5IDU3Ljk5MzggMTMwLjAzM0M2MS4xNDQ2IDEyNi41MDggNjQuNjg5MiAxMjMuNDQgNjguNjI3NyAxMjAuODI5QzcyLjU2NjIgMTE4LjM0OSA3Ni4zNTY5IDExNi43ODIgODAgMTE2LjEyOVY4Ni43NTQ0Qzc1LjQ3MDggODcuOTI5MiA3MS4zODQ2IDg5LjY5MTkgNjcuNzQxNSA5Mi4wNDE1QzY0IDk0LjUyMjUgNjAuNzUwOCA5Ny40NiA1Ny45OTM4IDEwMC44NTRDNTYuNTM0NSAxMDIuNzIgNTUuMjU0NSAxMDQuNjU5IDU0LjE1MzkgMTA2LjY3MVYwSDEyNUMxNDQuMzMgMCAxNjAgMTUuNjY5OSAxNjAgMzVWMTI1QzE2MCAxNDQuMzMgMTQ0LjMzIDE2MCAxMjUgMTYwSDEyNFYxOEgxMDQuOTQ4QzEwMy41NjkgMjEuNjgxNiAxMDEuMjU1IDI1LjM2MjggOTguMDA2MiAyOS4wNDQ0Qzk0Ljg1NTQgMzIuNTk0MiA5MS4zMTA4IDM1LjY4NDEgODcuMzcyMyAzOC4zMTRDODMuNDMzOCA0MC44MTIgNzkuNjQzMSA0Mi4zODk2IDc2IDQzLjA0NzRWNzIuNjMwNEM4MC41MjkyIDcxLjQ0NzMgODQuNjE1NCA2OS42NzI0IDg4LjI1ODUgNjcuMzA1N0M5MiA2NC44MDc2IDk1LjI0OTIgNjEuODQ5MSA5OC4wMDYyIDU4LjQzMDdDOTkuNDY1NSA1Ni41NTEzIDEwMC43NDUgNTQuNTk4NiAxMDEuODQ2IDUyLjU3MjNWMTYwSDM1QzE1LjY3IDE2MCAwIDE0NC4zMyAwIDEyNVYzNVoiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4K)](https://studio1hq.com)
[![Built with Velt](https://img.shields.io/badge/Built_with_Velt-141414?style=for-the-badge)](https://velt.dev)
[![Live demo](https://img.shields.io/badge/Live_demo-1c1917?style=for-the-badge&logo=vercel&logoColor=white)](https://linear-velt.vercel.app/)

[Velt docs](https://docs.velt.dev) &nbsp;·&nbsp; [Velt](https://velt.dev) &nbsp;·&nbsp; [More examples](https://github.com/Studio1HQ) &nbsp;·&nbsp; [studio1hq.com](https://studio1hq.com)

</div>

<br />

## Overview

A Linear-style issue page built with Next.js, Tiptap and [Velt](https://velt.dev). Users write in a rich text composer, comment inline on selected text, discuss in a comment section on the issue, and see who is online. A live demo is at [linear-velt.vercel.app](https://linear-velt.vercel.app/).

Velt provides the provider, the Tiptap comments integration, an inline comments section, the comments sidebar, presence and notifications.

## Features

- **Rich text composer**: Tiptap editor with colors, highlight, images, links, text alignment, underline and placeholder.
- **Inline comments**: `@veltdev/tiptap-velt-comments` comments on selected text, with `useCommentAnnotations`.
- **Inline comments section**: `VeltInlineCommentsSection` on the issue page.
- **Comments sidebar**: `VeltCommentsSidebar` with `VeltSidebarButton`.
- **Presence and notifications**: `VeltPresence` and `VeltNotificationsTool` in the project header.
- **Multi-user switching**: Switch between predefined users with avatars.
- **Dark and light theme**: Theme state is passed to the Velt components.
- **Navigation sidebar**: Layout, project and editor components styled with Radix primitives.

## Tech stack

| Layer | Tool |
| --- | --- |
| Framework | [Next.js](https://nextjs.org/) (App Router), [TypeScript](https://www.typescriptlang.org/) |
| Editor | [Tiptap](https://tiptap.dev/) |
| Collaboration | [Velt](https://velt.dev/) (`@veltdev/react`, `@veltdev/tiptap-velt-comments`) |
| UI | [React](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/) |
| State | [Zustand](https://zustand-demo.pmnd.rs/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Deployment | [Vercel](https://vercel.com/) |

## Getting started

### Prerequisites

- Node.js 16 or newer
- npm 8 or newer (the README uses pnpm)
- A Velt API key from the [Velt dashboard](https://app.velt.dev)

### Installation

```bash
git clone https://github.com/Studio1HQ/linearstyleEditor-velt.git
cd linearstyleEditor-velt
pnpm install
```

### Environment variables

Create a `.env.local` file in the project root (see `sample.env`).

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_VELT_ID` | Your Velt API key, from the [Velt dashboard](https://app.velt.dev). |

### Run

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000). Other scripts: `build`, `start` and `lint`.

## How it works

The project header initialises Velt: it identifies the selected user and sets the document to `linearStyleEditor`. It was built against Velt SDK 4.5.0-beta.14.

```text
linearstyleEditor-velt/
├── app/             # Next.js app directory
├── components/
│   ├── (editor)/    # Linear-style editor component
│   ├── layout/      # App shell components
│   ├── project/     # Project header and views
│   └── ui/          # UI components
├── helper/          # Predefined users
├── hooks/           # Toast and theme hooks
├── lib/             # Utilities and types
└── styles/          # Global styles
```

Troubleshooting:

- **Velt key problems**: Check the key is set in `.env.local` and active in the Velt dashboard.
- **Collaboration not working**: Check the browser console, your network and that you use a supported browser.
- **Build issues**: Delete `.next` and `node_modules`, run `pnpm install` again and check your Node.js version.

## Resources

- [Velt documentation](https://docs.velt.dev): Getting started and API reference.
- [Velt](https://velt.dev): Product site.
- [Velt dashboard](https://app.velt.dev): Create projects and API keys.
- [Velt on GitHub](https://github.com/veltdev): Velt open source repos.
- [Tiptap](https://tiptap.dev/): Editor docs.
- [Radix UI](https://www.radix-ui.com/themes/docs/overview/getting-started): UI primitives docs.

<br />

---

<div align="center">

<a href="https://studio1hq.com">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/Studio1HQ/website/main/brand/studio1-logo-on-dark.svg" />
    <img src="https://raw.githubusercontent.com/Studio1HQ/website/main/brand/studio1-logo-on-light.svg" alt="Studio1" width="160" />
  </picture>
</a>

Built by **[Studio1](https://studio1hq.com)**, the technical content and DevRel partner for devtool teams. Made with [Velt](https://velt.dev).<br />
Browse more open-source examples at [github.com/Studio1HQ](https://github.com/Studio1HQ).

[![Website](https://img.shields.io/badge/studio1hq.com-0b0807?style=for-the-badge&logo=googlechrome&logoColor=white)](https://studio1hq.com)
[![Book a call](https://img.shields.io/badge/Book_a_strategy_call-f97316?style=for-the-badge&logo=googlecalendar&logoColor=white)](https://cal.com/studio1/collab)
[![X](https://img.shields.io/badge/%40Studio1HQ-141414?style=for-the-badge&logo=x&logoColor=white)](https://x.com/Studio1HQ)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0a66c2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/company/studio1hq/)

<sub><a href="https://studio1hq.com">studio1hq.com</a> · Technical content, docs, video and DevRel for devtools</sub>

</div>
