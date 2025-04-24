import os from 'node:os';
import path from 'node:path';
import fs from 'fs-extra';

/**
 * Theme type definition
 */
export interface Theme {
  name: string;
  type: 'dark' | 'light';
}

/**
 * Configuration interface
 */
export interface Config {
  favoriteThemes: Theme[];
  lastUsed?: {
    dark?: string;
    light?: string;
  };
}

/**
 * Default configuration
 */
const defaultConfig: Config = {
  favoriteThemes: [],
  lastUsed: {
    dark: undefined,
    light: undefined,
  },
};

/**
 * Configuration file path
 */
const configDir = path.join(os.homedir(), '.vsw');
const configPath = path.join(configDir, 'config.json');

/**
 * Configuration manager
 */
export const configManager = {
  /**
   * Initialize configuration
   */
  init: async (): Promise<void> => {
    try {
      await fs.ensureDir(configDir);
      const exists = await fs.pathExists(configPath);

      if (!exists) {
        await fs.writeJSON(configPath, defaultConfig, { spaces: 2 });
      }
    } catch (error) {
      console.error('Failed to initialize configuration:', error);
      throw error;
    }
  },

  /**
   * Get configuration
   */
  get: async (): Promise<Config> => {
    try {
      await configManager.init();
      return await fs.readJSON(configPath);
    } catch (error) {
      console.error('Failed to read configuration:', error);
      return defaultConfig;
    }
  },

  /**
   * Save configuration
   */
  save: async (config: Config): Promise<void> => {
    try {
      await fs.writeJSON(configPath, config, { spaces: 2 });
    } catch (error) {
      console.error('Failed to save configuration:', error);
      throw error;
    }
  },

  /**
   * Add a theme to favorites
   */
  addFavoriteTheme: async (name: string, type: 'dark' | 'light'): Promise<void> => {
    const config = await configManager.get();

    // Check if theme already exists
    const exists = config.favoriteThemes.some((theme) => theme.name === name);

    if (!exists) {
      config.favoriteThemes.push({ name, type });
      await configManager.save(config);
    } else {
      // Update theme type if it exists
      const index = config.favoriteThemes.findIndex((theme) => theme.name === name);
      config.favoriteThemes[index].type = type;
      await configManager.save(config);
    }
  },

  /**
   * Remove a theme from favorites
   */
  removeFavoriteTheme: async (name: string): Promise<void> => {
    const config = await configManager.get();
    config.favoriteThemes = config.favoriteThemes.filter((theme) => theme.name !== name);
    await configManager.save(config);
  },

  /**
   * Get favorite themes
   */
  getFavoriteThemes: async (): Promise<Theme[]> => {
    const config = await configManager.get();
    return config.favoriteThemes;
  },

  /**
   * Set last used theme
   */
  setLastUsedTheme: async (name: string, type: 'dark' | 'light'): Promise<void> => {
    const config = await configManager.get();

    if (!config.lastUsed) {
      config.lastUsed = {};
    }

    config.lastUsed[type] = name;
    await configManager.save(config);
  },

  /**
   * Get last used theme by type
   */
  getLastUsedTheme: async (type: 'dark' | 'light'): Promise<string | undefined> => {
    const config = await configManager.get();
    return config.lastUsed?.[type];
  },
};
