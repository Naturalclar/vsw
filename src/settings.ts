import path from "node:path";
import fs from "fs-extra";
import type { ThemeColors } from "./theme-colors";
import { logger } from "./utils/logger";

/**
 * VSCode settings interface
 */
interface VSCodeSettings {
  "workbench.colorTheme"?: string;
  "workbench.colorCustomizations"?: Record<string, string>;
  "editor.tokenColorCustomizations"?: {
    textMateRules?: Array<{
      scope: string[] | string;
      settings: {
        foreground?: string;
        fontStyle?: string;
      };
    }>;
  };
  [key: string]: unknown;
}

/**
 * Path to VSCode settings file
 */
const getSettingsPath = (): string => {
  return path.join(process.cwd(), ".vscode", "settings.json");
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
      const settingsDir = path.join(process.cwd(), ".vscode");
      const settingsPath = getSettingsPath();

      // Create .vscode directory if it doesn't exist
      await fs.ensureDir(settingsDir);

      // Create settings.json if it doesn't exist
      const exists = await fs.pathExists(settingsPath);
      if (!exists) {
        await fs.writeJSON(settingsPath, {}, { spaces: 2 });
        logger.info("Created VSCode settings file");
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
    return settings["workbench.colorTheme"];
  },

  /**
   * Set theme
   */
  setTheme: async (themeName: string): Promise<void> => {
    try {
      const settings = await settingsManager.getSettings();
      settings["workbench.colorTheme"] = themeName;
      await settingsManager.saveSettings(settings);
      logger.success(`Theme set to "${themeName}"`);
    } catch (error) {
      logger.error(`Failed to set theme: ${error}`);
      throw error;
    }
  },

  /**
   * Set theme colors
   */
  setThemeColors: async (themeColors: ThemeColors): Promise<void> => {
    try {
      const settings = await settingsManager.getSettings();

      // Set workbench color customizations
      const colorCustomizations = { ...themeColors.workbench };

      // Add terminal colors if provided
      if (themeColors.terminal) {
        if (themeColors.terminal.background) {
          colorCustomizations["terminal.background"] =
            themeColors.terminal.background;
        }
        if (themeColors.terminal.foreground) {
          colorCustomizations["terminal.foreground"] =
            themeColors.terminal.foreground;
        }
      }

      settings["workbench.colorCustomizations"] = colorCustomizations;

      // Set editor token color customizations
      settings["editor.tokenColorCustomizations"] = {
        textMateRules: themeColors.editor.tokenColors,
      };

      await settingsManager.saveSettings(settings);
      logger.success("Theme colors applied");
    } catch (error) {
      logger.error(`Failed to set theme colors: ${error}`);
      throw error;
    }
  },

  /**
   * Clear theme colors
   */
  clearThemeColors: async (): Promise<void> => {
    try {
      const settings = await settingsManager.getSettings();

      // Remove color customizations
      settings["workbench.colorCustomizations"] = undefined;
      settings["editor.tokenColorCustomizations"] = undefined;

      await settingsManager.saveSettings(settings);
      logger.success("Theme colors cleared");
    } catch (error) {
      logger.error(`Failed to clear theme colors: ${error}`);
      throw error;
    }
  },
};
