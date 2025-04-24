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

# Set a pastel theme (interactive selection)
vsw pastel

# List available pastel themes
vsw pastel --list

# List dark pastel themes
vsw pastel --dark

# List light pastel themes
vsw pastel --light
```

## Pastel Themes

The CLI includes a collection of beautiful pastel color themes for VSCode. You can list and set these themes using the `pastel` command. When you set a pastel theme, it's automatically added to your favorites for quick access.

### Custom Colors

All pastel themes come with custom color definitions that are applied directly to your repository's VSCode settings, so you don't need to install any theme extensions. These custom colors are applied using the `workbench.colorCustomizations` and `editor.tokenColorCustomizations` properties in your repository's `.vscode/settings.json` file, making them specific to each repository.

Available pastel themes:

- **Pastel Light** - A light theme with soft pastel colors
- **Pastel Dark** - A dark theme with soft pastel colors
- **Panda Syntax** - A superminimal dark syntax theme with pastel colors
- **Fairy Floss** - A pastel-colored theme with a magical feel
- **Rainglow - Piggy Light** - A light pastel theme with pink accents
- **Rainglow - Lavender Light** - A light pastel theme with lavender accents
- **Rainglow - Tonic** - A dark theme with pastel green and blue accents
- **Horizon** - A beautifully warm dark theme with pastel colors
- **Ayu Light** - A simple light theme with soft pastel colors
- **Winter is Coming (Light)** - A light theme with soft blue pastel colors

## How It Works

VSW modifies the `.vscode/settings.json` file in your current repository to set the `workbench.colorTheme` property. For pastel themes with custom colors, it also sets the `workbench.colorCustomizations` and `editor.tokenColorCustomizations` properties in the same file. This allows you to have different themes and color customizations for different projects.

Favorite themes are stored in a configuration file in your home directory (`~/.vsw/config.json`), but the actual theme settings and color customizations are always repository-specific.

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
