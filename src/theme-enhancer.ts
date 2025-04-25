/**
 * Theme enhancer for improving contrast and readability
 */
import type { ThemeColors } from './theme-colors';
import { adjustDarkThemeCommentColor, ensureMinimumContrast } from './utils/color-utils';

/**
 * Enhance a dark theme by improving contrast for subtexts (comments)
 *
 * @param theme The theme colors to enhance
 * @returns A new theme colors object with enhanced contrast
 */
export function enhanceDarkThemeContrast(theme: ThemeColors): ThemeColors {
  // Create a deep copy of the theme to avoid modifying the original
  const enhancedTheme: ThemeColors = JSON.parse(JSON.stringify(theme));

  // Get the background color
  const backgroundColor = enhancedTheme.workbench['editor.background'];

  // Find and enhance comment colors
  for (const tokenColor of enhancedTheme.editor.tokenColors) {
    // Check if this is a comment token
    if (
      (Array.isArray(tokenColor.scope) &&
        (tokenColor.scope.includes('comment') ||
          tokenColor.scope.includes('punctuation.definition.comment'))) ||
      (typeof tokenColor.scope === 'string' &&
        (tokenColor.scope === 'comment' || tokenColor.scope === 'punctuation.definition.comment'))
    ) {
      // If this token has a foreground color, enhance its contrast
      if (tokenColor.settings.foreground) {
        tokenColor.settings.foreground = adjustDarkThemeCommentColor(
          tokenColor.settings.foreground,
          backgroundColor
        );
      }
    }
  }

  // Enhance input text colors if they exist
  if (!enhancedTheme.input) {
    enhancedTheme.input = {};
  }

  // If input background is not set, use a slightly darker version of the editor background
  if (!enhancedTheme.input.background) {
    enhancedTheme.input.background =
      enhancedTheme.workbench['sideBar.background'] || backgroundColor;
  }

  // If input foreground color is not set, use the editor foreground color
  if (!enhancedTheme.input.foreground) {
    enhancedTheme.input.foreground = enhancedTheme.workbench['editor.foreground'];
  }

  // Ensure input foreground has good contrast with input background
  if (enhancedTheme.input.foreground && enhancedTheme.input.background) {
    enhancedTheme.input.foreground = ensureMinimumContrast(
      enhancedTheme.input.foreground,
      enhancedTheme.input.background,
      5.0
    );
  }

  // Add search input text color
  if (!enhancedTheme.search) {
    enhancedTheme.search = {};
  }

  // Use input foreground color for search input text if available, otherwise use editor foreground
  enhancedTheme.search.inputText =
    enhancedTheme.input.foreground || enhancedTheme.workbench['editor.foreground'];

  return enhancedTheme;
}

/**
 * Apply contrast enhancement to all dark themes
 *
 * This function should be called when initializing the theme system
 * to ensure all dark themes have sufficient contrast for subtexts
 */
export function enhanceAllDarkThemes(): void {
  // This function will be implemented in the theme manager
  // It will apply the enhanceDarkThemeContrast function to all dark themes
}
