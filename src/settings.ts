import path from 'node:path';
import fs from 'fs-extra';
import { logger } from './utils/logger';

/**
 * VSCode settings interface
 */
interface VSCodeSettings {
  'workbench.colorTheme'?: string;
  [key: string]: unknown;
}

/**
 * Path to VSCode settings file
 */
const getSettingsPath = (): string => {
  return path.join(process.cwd(), '.vscode', 'settings.json');
};

/**
 * VSCode settings manager
 */
export const settingsManager = {
  /**
   * Initialize VSCode settings
   */
  init: async (): Promise<void> => {
    try {
      const settingsDir = path.join(process.cwd(), '.vscode');
      const settingsPath = getSettingsPath();

      // Create .vscode directory if it doesn't exist
      await fs.ensureDir(settingsDir);

      // Create settings.json if it doesn't exist
      const exists = await fs.pathExists(settingsPath);
      if (!exists) {
        await fs.writeJSON(settingsPath, {}, { spaces: 2 });
        logger.info('Created VSCode settings file');
      }
    } catch (error) {
      logger.error(`Failed to initialize VSCode settings: ${error}`);
      throw error;
    }
  },

  /**
   * Get VSCode settings
   */
  getSettings: async (): Promise<VSCodeSettings> => {
    try {
      await settingsManager.init();
      const settingsPath = getSettingsPath();
      return await fs.readJSON(settingsPath);
    } catch (error) {
      logger.error(`Failed to read VSCode settings: ${error}`);
      return {};
    }
  },

  /**
   * Save VSCode settings
   */
  saveSettings: async (settings: VSCodeSettings): Promise<void> => {
    try {
      const settingsPath = getSettingsPath();
      await fs.writeJSON(settingsPath, settings, { spaces: 2 });
    } catch (error) {
      logger.error(`Failed to save VSCode settings: ${error}`);
      throw error;
    }
  },

  /**
   * Get current theme
   */
  getCurrentTheme: async (): Promise<string | undefined> => {
    const settings = await settingsManager.getSettings();
    return settings['workbench.colorTheme'];
  },

  /**
   * Set theme
   */
  setTheme: async (themeName: string): Promise<void> => {
    try {
      const settings = await settingsManager.getSettings();
      settings['workbench.colorTheme'] = themeName;
      await settingsManager.saveSettings(settings);
      logger.success(`Theme set to "${themeName}"`);
    } catch (error) {
      logger.error(`Failed to set theme: ${error}`);
      throw error;
    }
  },
};
