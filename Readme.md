# Linear Style Editor Velt Example (Next.js)

A collaborative interface built with Next.js, React, Tailwind CSS, and Velt, inspired by the clean and modern design of Linear Style. It features real-time commenting, multi-user collaboration, and a sleek UI optimized for modern SaaS applications.
---

## Features

- 📝 **Rich Text Composer**: Create and style content using a rich text editor powered by Tiptap.
- 🧑‍🤝‍🧑 **Multi-User Support**: Switch between predefined users with avatars.
- 💬 **Real-Time Comments**: Add and view collaborative comments using Velt.
- 🌓 **Dark/Light Theme**: Toggle between dark and light modes.
- 📊 **Sidebar**: Sidebar for navigation.
- 🔔 **Notifications**: In-app notifications powered by Velt.
- 🧩 **Reusable UI Components**: Built with Radix primitives.

---

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **UI**: [React](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/)
- **Editor**: [Tiptap](https://tiptap.dev/)
- **Collaboration**: [Velt](https://velt.dev/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Other**: [Radix UI](https://www.radix-ui.com/)

---

## Prerequisites

- **Node.js** (v16+ recommended)
- **npm** (v8+ recommended)

---

## Getting Started

1. Clone the repository

   ```bash
   git clone ------
   ```

2. Navigate to the `linearStyleEditor` directory

   ```bash
   cd linearStyleEditor
   ```

3. Install dependencies:

   ```bash
   pnpm install
   ```

4. Create a `.env.local` file with your Velt API key:

   ```
   NEXT_PUBLIC_VELT_ID=your_api_key_here
   ```
   reference to `sample.env` file
   > Note: You can get your API key from the [Velt Dashboard](https://app.velt.dev)

5. Run the development server:

   ```bash
   pnpm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
linearStyleEditor/
├── app/                 # Next.js app directory
├── components/          # React components
│   ├── (editor)/      #  Linear Style Editor  component
│   ├── layout/            # web-app components
│   ├── project/            # web-app components
│   └── ui/              # UI components
├── helper/              # Users DB
├── hooks/               # Toast Hooks, Theme
├── lib/                 # Utility functions and types
├── public/              # Static assets
└── styles/              # Global styles
```

## Velt Integration

This project uses Velt SDK v4.5.0-beta.14 for real-time collaboration features:

### Core Features

- User presence and cursor tracking
- Comments and annotations
- Notifications
- Real-time updates

### Velt Components Used

- `VeltProvider`: Main provider component for Velt integration
- `VeltComments`: Inline commenting system
- `VeltNotificationsTool`: Notification system
- `VeltCommentsSidebar`: Comments management sidebar
- `VeltInlineCommentsSection`: Inline section commenting system

### Configuration

The application uses the following Velt configurations:

- Document ID: "linearStyleEditor"
- User authentication with predefined users
- Custom comment bubble styling
- Dark/Light mode support

## Troubleshooting

### Common Issues

1. **Velt API Key Issues**

   - Ensure your API key is correctly set in `.env.local`
   - Verify the key is active in your Velt Dashboard

2. **Collaboration Features Not Working**

   - Check browser console for errors
   - Verify network connectivity
   - Ensure you're using a supported browser

3. **Build Issues**
   - Clear `.next` directory and node_modules
   - Run `pnpm install` again
   - Check Node.js version compatibility

## Documentation

### Velt Resources

- [Velt Documentation](https://docs.velt.dev/getting-started/introduction)
- [Velt API Reference](https://docs.velt.dev/api-reference)
- [Velt Dashboard](https://app.velt.dev)
- [Velt GitHub](https://github.com/veltdev)

### UI Components

- [Radix UI Documentation](https://www.radix-ui.com/themes/docs/overview/getting-started)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Contributing

Feel free to submit issues and enhancement requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
