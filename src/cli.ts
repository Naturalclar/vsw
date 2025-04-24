import { Command } from 'commander';
import inquirer from 'inquirer';
import { readFileSync } from 'fs';
import { join } from 'path';
import {
  type ColorTheme,
  getAllColorThemes,
  getColorThemeByName,
  getColorThemesByType,
} from './color-themes';
import { themeManager } from './theme-manager';
import {
  type ThemePreset,
  getAllPastelThemes,
  getPastelThemeByName,
  getPastelThemesByType,
} from './theme-presets';
import { type Theme, configManager } from './utils/config';
import { logger } from './utils/logger';
import {
  type VividTheme,
  getAllVividThemes,
  getVividThemeByName,
  getVividThemesByType,
} from './vivid-themes';

/**
 * Create CLI program
 */
export const createCLI = (): Command => {
  const program = new Command();

  // Get version from package.json
  const packageJsonPath = join(__dirname, '..', 'package.json');
  const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
  const version = packageJson.version;

  program
    .name('vsw')
    .description('VSCode theme switcher')
    .version(version)
    .helpOption('-h, --help', 'Display help for command');

  // Set theme command
  program
    .command('set')
    .description('Set VSCode theme')
    .argument('[theme-name]', 'Theme name to set')
    .action(async (themeName?: string) => {
      try {
        if (themeName) {
          await themeManager.setTheme(themeName);
        } else {
          // Interactive theme selection
          const currentTheme = await themeManager.getCurrentTheme();
          const favorites = await themeManager.getFavoriteThemes();

          if (favorites.length === 0) {
            logger.warn('No favorite themes found. Add themes with "vsw add <theme-name>"');
            return;
          }

          const { selectedTheme } = await inquirer.prompt([
            {
              type: 'list',
              name: 'selectedTheme',
              message: 'Select a theme:',
              choices: favorites.map((theme) => ({
                name: `${theme.name} (${theme.type})`,
                value: theme.name,
              })),
              default: currentTheme,
            },
          ]);

          await themeManager.setTheme(selectedTheme);
        }
      } catch (error) {
        logger.error(`Failed to set theme: ${error}`);
      }
    });

  // List themes command
  program
    .command('list')
    .description('List favorite themes')
    .option('-a, --all', 'Show all themes')
    .option('-d, --dark', 'Show only dark themes')
    .option('-l, --light', 'Show only light themes')
    .action(async (options) => {
      try {
        let themes: Theme[] = [];

        if (options.dark) {
          themes = await themeManager.getFavoriteThemesByType('dark');
          logger.info('Dark themes:');
        } else if (options.light) {
          themes = await themeManager.getFavoriteThemesByType('light');
          logger.info('Light themes:');
        } else {
          themes = await themeManager.getFavoriteThemes();
          logger.info('All favorite themes:');
        }

        if (themes.length === 0) {
          logger.warn('No themes found');
          return;
        }

        for (const theme of themes) {
          logger.theme(`${theme.name} (${theme.type})`);
        }
      } catch (error) {
        logger.error(`Failed to list themes: ${error}`);
      }
    });

  // Add theme command
  program
    .command('add')
    .description('Add a theme to favorites')
    .argument('<theme-name>', 'Theme name to add')
    .option('-d, --dark', 'Add as dark theme')
    .option('-l, --light', 'Add as light theme')
    .action(async (themeName, options) => {
      try {
        let themeType: 'dark' | 'light';

        if (options.dark) {
          themeType = 'dark';
        } else if (options.light) {
          themeType = 'light';
        } else {
          // Ask for theme type
          const { type } = await inquirer.prompt([
            {
              type: 'list',
              name: 'type',
              message: 'Select theme type:',
              choices: [
                { name: 'Dark', value: 'dark' },
                { name: 'Light', value: 'light' },
              ],
            },
          ]);

          themeType = type;
        }

        await themeManager.addFavoriteTheme(themeName, themeType);
      } catch (error) {
        logger.error(`Failed to add theme: ${error}`);
      }
    });

  // Remove theme command
  program
    .command('remove')
    .description('Remove a theme from favorites')
    .argument('[theme-name]', 'Theme name to remove')
    .action(async (themeName?: string) => {
      try {
        if (themeName) {
          await themeManager.removeFavoriteTheme(themeName);
        } else {
          // Interactive theme selection
          const favorites = await themeManager.getFavoriteThemes();

          if (favorites.length === 0) {
            logger.warn('No favorite themes found');
            return;
          }

          const { selectedTheme } = await inquirer.prompt([
            {
              type: 'list',
              name: 'selectedTheme',
              message: 'Select a theme to remove:',
              choices: favorites.map((theme) => ({
                name: `${theme.name} (${theme.type})`,
                value: theme.name,
              })),
            },
          ]);

          await themeManager.removeFavoriteTheme(selectedTheme);
        }
      } catch (error) {
        logger.error(`Failed to remove theme: ${error}`);
      }
    });

  // Current theme command
  program
    .command('current')
    .description('Show current theme')
    .action(async () => {
      try {
        const currentTheme = await themeManager.getCurrentTheme();

        if (currentTheme) {
          logger.info(`Current theme: ${currentTheme}`);
        } else {
          logger.warn('No theme set');
        }
      } catch (error) {
        logger.error(`Failed to get current theme: ${error}`);
      }
    });

  // Dark theme command
  program
    .command('dark')
    .description('Switch to a dark theme')
    .action(async () => {
      try {
        await themeManager.setDarkTheme();
      } catch (error) {
        logger.error(`Failed to set dark theme: ${error}`);
      }
    });

  // Light theme command
  program
    .command('light')
    .description('Switch to a light theme')
    .action(async () => {
      try {
        await themeManager.setLightTheme();
      } catch (error) {
        logger.error(`Failed to set light theme: ${error}`);
      }
    });

  // Pastel themes command
  program
    .command('pastel')
    .description('Pastel theme options')
    .option('-l, --list', 'List all pastel themes')
    .option('-d, --dark', 'List dark pastel themes')
    .option('-i, --light', 'List light pastel themes')
    .option('-s, --set', 'Set a pastel theme')
    .action(async (options) => {
      try {
        // List pastel themes
        if (options.list) {
          const themes = getAllPastelThemes();
          logger.info('Available pastel themes:');

          for (const theme of themes) {
            logger.theme(`${theme.name} (${theme.type}) - ${theme.description}`);
          }
          return;
        }

        // List dark pastel themes
        if (options.dark) {
          const themes = getPastelThemesByType('dark');
          logger.info('Dark pastel themes:');

          for (const theme of themes) {
            logger.theme(`${theme.name} - ${theme.description}`);
          }
          return;
        }

        // List light pastel themes
        if (options.light) {
          const themes = getPastelThemesByType('light');
          logger.info('Light pastel themes:');

          for (const theme of themes) {
            logger.theme(`${theme.name} - ${theme.description}`);
          }
          return;
        }

        // Set a pastel theme (default behavior or when --set is used)
        if (options.set || (!options.list && !options.dark && !options.light)) {
          const themes = getAllPastelThemes();

          const { selectedTheme } = await inquirer.prompt([
            {
              type: 'list',
              name: 'selectedTheme',
              message: 'Select a pastel theme:',
              choices: themes.map((theme) => ({
                name: `${theme.name} (${theme.type}) - ${theme.description}`,
                value: theme.name,
              })),
            },
          ]);

          await themeManager.setTheme(selectedTheme);

          // Add to favorites if not already there
          const pastelTheme = getPastelThemeByName(selectedTheme);
          if (pastelTheme) {
            await themeManager.addFavoriteTheme(selectedTheme, pastelTheme.type);
          }
        }
      } catch (error) {
        logger.error(`Failed to handle pastel themes: ${error}`);
      }
    });

  // Vivid themes command
  program
    .command('vivid')
    .description('Vivid theme options')
    .option('-l, --list', 'List all vivid themes')
    .option('-d, --dark', 'List dark vivid themes')
    .option('-i, --light', 'List light vivid themes')
    .option('-s, --set', 'Set a vivid theme')
    .action(async (options) => {
      try {
        // List vivid themes
        if (options.list) {
          const themes = getAllVividThemes();
          logger.info('Available vivid themes:');

          for (const theme of themes) {
            logger.theme(`${theme.name} (${theme.type}) - ${theme.description}`);
          }
          return;
        }

        // List dark vivid themes
        if (options.dark) {
          const themes = getVividThemesByType('dark');
          logger.info('Dark vivid themes:');

          for (const theme of themes) {
            logger.theme(`${theme.name} - ${theme.description}`);
          }
          return;
        }

        // List light vivid themes
        if (options.light) {
          const themes = getVividThemesByType('light');
          logger.info('Light vivid themes:');

          for (const theme of themes) {
            logger.theme(`${theme.name} - ${theme.description}`);
          }
          return;
        }

        // Set a vivid theme (default behavior or when --set is used)
        if (options.set || (!options.list && !options.dark && !options.light)) {
          const themes = getAllVividThemes();

          const { selectedTheme } = await inquirer.prompt([
            {
              type: 'list',
              name: 'selectedTheme',
              message: 'Select a vivid theme:',
              choices: themes.map((theme) => ({
                name: `${theme.name} (${theme.type}) - ${theme.description}`,
                value: theme.name,
              })),
            },
          ]);

          await themeManager.setTheme(selectedTheme);

          // Add to favorites if not already there
          const vividTheme = getVividThemeByName(selectedTheme);
          if (vividTheme) {
            await themeManager.addFavoriteTheme(selectedTheme, vividTheme.type);
          }
        }
      } catch (error) {
        logger.error(`Failed to handle vivid themes: ${error}`);
      }
    });

  // Color themes command
  program
    .command('color')
    .description('Color theme options')
    .option('-l, --list', 'List all color themes')
    .option('-d, --dark', 'List dark color themes')
    .option('-i, --light', 'List light color themes')
    .option('-s, --set', 'Set a color theme')
    .action(async (options) => {
      try {
        // List color themes
        if (options.list) {
          const themes = getAllColorThemes();
          logger.info('Available color themes:');

          for (const theme of themes) {
            logger.theme(`${theme.name} (${theme.type}) - ${theme.description}`);
          }
          return;
        }

        // List dark color themes
        if (options.dark) {
          const themes = getColorThemesByType('dark');
          logger.info('Dark color themes:');

          for (const theme of themes) {
            logger.theme(`${theme.name} - ${theme.description}`);
          }
          return;
        }

        // List light color themes
        if (options.light) {
          const themes = getColorThemesByType('light');
          logger.info('Light color themes:');

          for (const theme of themes) {
            logger.theme(`${theme.name} - ${theme.description}`);
          }
          return;
        }

        // Set a color theme (default behavior or when --set is used)
        if (options.set || (!options.list && !options.dark && !options.light)) {
          const themes = getAllColorThemes();

          const { selectedTheme } = await inquirer.prompt([
            {
              type: 'list',
              name: 'selectedTheme',
              message: 'Select a color theme:',
              choices: themes.map((theme) => ({
                name: `${theme.name} (${theme.type}) - ${theme.description}`,
                value: theme.name,
              })),
            },
          ]);

          await themeManager.setTheme(selectedTheme);

          // Add to favorites if not already there
          const colorTheme = getColorThemeByName(selectedTheme);
          if (colorTheme) {
            await themeManager.addFavoriteTheme(selectedTheme, colorTheme.type);
          }
        }
      } catch (error) {
        logger.error(`Failed to handle color themes: ${error}`);
      }
    });

  return program;
};
