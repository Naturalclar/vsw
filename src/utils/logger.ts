import chalk from 'chalk';

/**
 * Logger utility for consistent console output
 */
export const logger = {
  /**
   * Log an informational message
   */
  info: (message: string): void => {
    console.log(chalk.blue('ℹ'), message);
  },

  /**
   * Log a success message
   */
  success: (message: string): void => {
    console.log(chalk.green('✓'), message);
  },

  /**
   * Log a warning message
   */
  warn: (message: string): void => {
    console.log(chalk.yellow('⚠'), message);
  },

  /**
   * Log an error message
   */
  error: (message: string): void => {
    console.log(chalk.red('✗'), message);
  },

  /**
   * Log a debug message (only in debug mode)
   */
  debug: (message: string): void => {
    if (process.env.DEBUG) {
      console.log(chalk.gray('🔍'), message);
    }
  },

  /**
   * Log a theme-related message
   */
  theme: (message: string): void => {
    console.log(chalk.magenta('🎨'), message);
  },
};
