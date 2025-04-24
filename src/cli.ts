import { Command } from 'commander';
import inquirer from 'inquirer';
import { themeManager } from './theme-manager';
import { type Theme, configManager } from './utils/config';
import { logger } from './utils/logger';

/**
 * Create CLI program
 */
export const createCLI = (): Command => {
  const program = new Command();

  program
    .name('vsw')
    .description('VSCode theme switcher')
    .version('0.0.0')
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

  return program;
};
