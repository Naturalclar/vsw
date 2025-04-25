/**
 * Theme enhancer for improving contrast and readability
 */
import type { ThemeColors } from "./theme-colors";
import { adjustDarkThemeCommentColor } from "./utils/color-utils";

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
  const backgroundColor = enhancedTheme.workbench["editor.background"];

  // Find and enhance comment colors
  for (const tokenColor of enhancedTheme.editor.tokenColors) {
    // Check if this is a comment token
    if (
      (Array.isArray(tokenColor.scope) &&
        (tokenColor.scope.includes("comment") ||
          tokenColor.scope.includes("punctuation.definition.comment"))) ||
      (typeof tokenColor.scope === "string" &&
        (tokenColor.scope === "comment" ||
          tokenColor.scope === "punctuation.definition.comment"))
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
