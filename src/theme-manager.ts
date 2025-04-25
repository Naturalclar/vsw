import { getColorThemeColors } from './color-themes';
import { settingsManager } from './settings';
import { getThemeColors } from './theme-colors';
import { enhanceDarkThemeContrast } from './theme-enhancer';
import { type Theme, configManager } from './utils/config';
import { logger } from './utils/logger';
import { getVividThemeColors } from './vivid-themes';

/**
 * Theme manager
 */
export const themeManager = {
  /**
   * Set theme
   */
  setTheme: async (themeName: string): Promise<void> => {
    try {
      await settingsManager.setTheme(themeName);

      // Check if this is a theme with custom colors
      const pastelThemeColors = getThemeColors(themeName);
      const vividThemeColors = getVividThemeColors(themeName);
      const colorThemeColors = getColorThemeColors(themeName);

      // Get the theme type (dark or light)
      const themeType = await themeManager.getThemeType(themeName);

      if (pastelThemeColors) {
        // Apply pastel theme custom colors with enhanced contrast for dark themes
        const themeColors =
          themeType === 'dark' ? enhanceDarkThemeContrast(pastelThemeColors) : pastelThemeColors;

        await settingsManager.setThemeColors(themeColors);
        logger.success(`Applied pastel custom colors for "${themeName}"`);
      } else if (vividThemeColors) {
        // Apply vivid theme custom colors with enhanced contrast for dark themes
        const themeColors =
          themeType === 'dark' ? enhanceDarkThemeContrast(vividThemeColors) : vividThemeColors;

        await settingsManager.setThemeColors(themeColors);
        logger.success(`Applied vivid custom colors for "${themeName}"`);
      } else if (colorThemeColors) {
        // Apply color theme custom colors with enhanced contrast for dark themes
        const themeColors =
          themeType === 'dark' ? enhanceDarkThemeContrast(colorThemeColors) : colorThemeColors;

        await settingsManager.setThemeColors(themeColors);
        logger.success(`Applied color custom colors for "${themeName}"`);
      } else {
        // Clear any custom colors if this is not a theme with custom colors
        await settingsManager.clearThemeColors();
      }
    } catch (error) {
      logger.error(`Failed to set theme: ${error}`);
      throw error;
    }
  },

  /**
   * Get current theme
   */
  getCurrentTheme: async (): Promise<string | undefined> => {
    try {
      return await settingsManager.getCurrentTheme();
    } catch (error) {
      logger.error(`Failed to get current theme: ${error}`);
      return undefined;
    }
  },

  /**
   * Add theme to favorites
   */
  addFavoriteTheme: async (themeName: string, type: 'dark' | 'light'): Promise<void> => {
    try {
      await configManager.addFavoriteTheme(themeName, type);
      logger.success(`Added "${themeName}" to favorites as ${type} theme`);
    } catch (error) {
      logger.error(`Failed to add theme to favorites: ${error}`);
      throw error;
    }
  },

  /**
   * Remove theme from favorites
   */
  removeFavoriteTheme: async (themeName: string): Promise<void> => {
    try {
      await configManager.removeFavoriteTheme(themeName);
      logger.success(`Removed "${themeName}" from favorites`);
    } catch (error) {
      logger.error(`Failed to remove theme from favorites: ${error}`);
      throw error;
    }
  },

  /**
   * Get favorite themes
   */
  getFavoriteThemes: async (): Promise<Theme[]> => {
    try {
      return await configManager.getFavoriteThemes();
    } catch (error) {
      logger.error(`Failed to get favorite themes: ${error}`);
      return [];
    }
  },

  /**
   * Get favorite themes by type
   */
  getFavoriteThemesByType: async (type: 'dark' | 'light'): Promise<Theme[]> => {
    try {
      const themes = await configManager.getFavoriteThemes();
      return themes.filter((theme) => theme.type === type);
    } catch (error) {
      logger.error(`Failed to get ${type} themes: ${error}`);
      return [];
    }
  },

  /**
   * Set theme by type
   */
  setThemeByType: async (type: 'dark' | 'light'): Promise<void> => {
    try {
      // Try to get the last used theme of this type
      const lastUsed = await configManager.getLastUsedTheme(type);

      if (lastUsed) {
        await themeManager.setTheme(lastUsed);
        return;
      }

      // If no last used theme, get the first favorite of this type
      const favorites = await themeManager.getFavoriteThemesByType(type);

      if (favorites.length > 0) {
        await themeManager.setTheme(favorites[0].name);
        await configManager.setLastUsedTheme(favorites[0].name, type);
      } else {
        logger.warn(`No ${type} themes found in favorites`);
      }
    } catch (error) {
      logger.error(`Failed to set ${type} theme: ${error}`);
      throw error;
    }
  },

  /**
   * Set dark theme
   */
  setDarkTheme: async (): Promise<void> => {
    await themeManager.setThemeByType('dark');
  },

  /**
   * Set light theme
   */
  setLightTheme: async (): Promise<void> => {
    await themeManager.setThemeByType('light');
  },

  /**
   * Get theme type (dark or light) by name
   */
  getThemeType: async (themeName: string): Promise<'dark' | 'light'> => {
    try {
      // Check in color themes
      const colorTheme = getColorThemeByName(themeName);
      if (colorTheme) {
        return colorTheme.type;
      }

      // Check in vivid themes
      const vividTheme = getVividThemeByName(themeName);
      if (vividTheme) {
        return vividTheme.type;
      }

      // Check in pastel themes (assuming there's a function to get theme by name)
      // If not found, default to dark
      return 'dark';
    } catch (error) {
      logger.error(`Failed to determine theme type: ${error}`);
      return 'dark'; // Default to dark if there's an error
    }
  },
};

// Import these functions at the top of the file
import { getColorThemeByName } from './color-themes';
import { getVividThemeByName } from './vivid-themes';
