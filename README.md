# VSW - VSCode Theme Switcher

A command-line tool to easily switch VSCode color themes at the repository level.

## Features

- Switch between themes with a simple command
- Save favorite themes for quick access
- Categorize themes as dark or light
- Interactive theme selection
- Repository-specific theme settings

## Installation

```bash
# Install globally
npm install -g vsw

# Or use with npx
npx vsw [command]
```

## Usage

```bash
# Show help
vsw --help

# Set a specific theme
vsw set "Theme Name"

# Set a theme interactively (select from favorites)
vsw set

# List favorite themes
vsw list

# List only dark themes
vsw list --dark

# List only light themes
vsw list --light

# Add a theme to favorites
vsw add "Theme Name" --dark
vsw add "Theme Name" --light

# Add a theme interactively (will prompt for theme type)
vsw add "Theme Name"

# Remove a theme from favorites
vsw remove "Theme Name"

# Remove a theme interactively
vsw remove

# Show current theme
vsw current

# Switch to a dark theme (from favorites)
vsw dark

# Switch to a light theme (from favorites)
vsw light
```

## How It Works

VSW modifies the `.vscode/settings.json` file in your current repository to set the `workbench.colorTheme` property. This allows you to have different themes for different projects.

Favorite themes are stored in a configuration file in your home directory (`~/.vsw/config.json`).

## Development

```bash
# Clone the repository
git clone https://github.com/Naturalclar/vsw.git
cd vsw

# Install dependencies
pnpm install

# Build the project
pnpm build

# Run in development mode
pnpm dev

# Lint the code
pnpm lint

# Format the code
pnpm format
```

## License

MIT
