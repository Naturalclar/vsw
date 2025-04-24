# VSW - VSCode Theme Switcher

A command-line tool to easily switch VSCode color themes at the repository level.

https://github.com/user-attachments/assets/216912e1-8399-4bd8-a138-b9b397ad5a4d

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

# Set a vivid theme (interactive selection)
vsw vivid

# List available vivid themes
vsw vivid --list

# List dark vivid themes
vsw vivid --dark

# List light vivid themes
vsw vivid --light

# Set a color theme (interactive selection)
vsw color

# List available color themes
vsw color --list

# List dark color themes
vsw color --dark

# List light color themes
vsw color --light
```

## Theme Collections

The CLI includes collections of beautiful color themes for VSCode. You can list and set these themes using the `pastel`, `vivid`, and `color` commands. When you set a theme, it's automatically added to your favorites for quick access.

### Custom Colors

All themes come with custom color definitions that are applied directly to your repository's VSCode settings, so you don't need to install any theme extensions. These custom colors are applied using the `workbench.colorCustomizations` and `editor.tokenColorCustomizations` properties in your repository's `.vscode/settings.json` file, making them specific to each repository.

### Pastel Themes

Soft, muted color themes with a gentle aesthetic. Use the `pastel` command to access these themes.

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

### Vivid Themes

Bright, vibrant color themes with high contrast and bold colors. Use the `vivid` command to access these themes.

Available vivid themes:

- **Neon Lights** - A vibrant dark theme with neon accents
- **Synthwave** - A retro-futuristic theme with bright colors
- **Cyberpunk** - A high-contrast theme with electric colors
- **Tropical** - A bright theme with vivid tropical colors
- **Candy** - A colorful theme with sweet candy colors

### Color Themes

Themes based on specific colors for a focused color palette. Use the `color` command to access these themes.

#### Dark Color Themes:

- **Ruby Red** - A dark theme with rich red accents
- **Emerald Green** - A dark theme with vibrant green accents
- **Sapphire Blue** - A dark theme with deep blue accents
- **Royal Purple** - A dark theme with elegant purple accents
- **Sunset Orange** - A dark theme with warm orange accents
- **Chocolate Brown** - A dark theme with earthy brown accents

#### Light Color Themes:

- **Cherry Red** - A light theme with bright red accents
- **Mint Green** - A light theme with fresh green accents
- **Sky Blue** - A light theme with clear blue accents
- **Lavender Purple** - A light theme with soft purple accents
- **Peach Orange** - A light theme with gentle orange accents
- **Caramel Brown** - A light theme with warm brown accents

## How It Works

VSW modifies the `.vscode/settings.json` file in your current repository to set the `workbench.colorTheme` property. For pastel, vivid, and color themes with custom colors, it also sets the `workbench.colorCustomizations` and `editor.tokenColorCustomizations` properties in the same file. This allows you to have different themes and color customizations for different projects.

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
