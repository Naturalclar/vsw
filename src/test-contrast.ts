/**
 * Test script to demonstrate contrast improvement for dark theme comments
 */
import { getColorThemeColors } from "./color-themes";
import { enhanceDarkThemeContrast } from "./theme-enhancer";
import { getContrastRatio } from "./utils/color-utils";
import { logger } from "./utils/logger";
import { getVividThemeColors } from "./vivid-themes";
import { getThemeColors } from "./theme-colors";
import type { ThemeColors } from "./theme-colors";

/**
 * Test contrast improvement for a specific theme
 */
function testThemeContrast(
  themeName: string,
  themeType: "color" | "vivid" | "pastel"
): void {
  logger.info(
    `Testing contrast improvement for theme: ${themeName} (${themeType})`
  );

  // Get the original theme colors based on theme type
  let originalTheme: ThemeColors | undefined;

  if (themeType === "color") {
    originalTheme = getColorThemeColors(themeName);
  } else if (themeType === "vivid") {
    originalTheme = getVividThemeColors(themeName);
  } else if (themeType === "pastel") {
    originalTheme = getThemeColors(themeName);
  }

  if (!originalTheme) {
    logger.error(`Theme not found: ${themeName}`);
    return;
  }

  // Get the background color
  const backgroundColor = originalTheme.workbench["editor.background"];
  logger.info(`Background color: ${backgroundColor}`);

  // Find the comment token color
  let commentColor = "";
  for (const tokenColor of originalTheme.editor.tokenColors) {
    if (
      (Array.isArray(tokenColor.scope) &&
        (tokenColor.scope.includes("comment") ||
          tokenColor.scope.includes("punctuation.definition.comment"))) ||
      (typeof tokenColor.scope === "string" &&
        (tokenColor.scope === "comment" ||
          tokenColor.scope === "punctuation.definition.comment"))
    ) {
      if (tokenColor.settings.foreground) {
        commentColor = tokenColor.settings.foreground;
        break;
      }
    }
  }

  if (!commentColor) {
    logger.error("Comment color not found");
    return;
  }

  logger.info(`Original comment color: ${commentColor}`);

  // Calculate original contrast ratio
  const originalContrastRatio = getContrastRatio(commentColor, backgroundColor);
  logger.info(`Original contrast ratio: ${originalContrastRatio.toFixed(2)}`);

  // Enhance the theme
  const enhancedTheme = enhanceDarkThemeContrast(originalTheme);

  // Find the enhanced comment color
  let enhancedCommentColor = "";
  for (const tokenColor of enhancedTheme.editor.tokenColors) {
    if (
      (Array.isArray(tokenColor.scope) &&
        (tokenColor.scope.includes("comment") ||
          tokenColor.scope.includes("punctuation.definition.comment"))) ||
      (typeof tokenColor.scope === "string" &&
        (tokenColor.scope === "comment" ||
          tokenColor.scope === "punctuation.definition.comment"))
    ) {
      if (tokenColor.settings.foreground) {
        enhancedCommentColor = tokenColor.settings.foreground;
        break;
      }
    }
  }

  if (!enhancedCommentColor) {
    logger.error("Enhanced comment color not found");
    return;
  }

  logger.info(`Enhanced comment color: ${enhancedCommentColor}`);

  // Calculate enhanced contrast ratio
  const enhancedContrastRatio = getContrastRatio(
    enhancedCommentColor,
    backgroundColor
  );
  logger.info(`Enhanced contrast ratio: ${enhancedContrastRatio.toFixed(2)}`);

  // Calculate improvement percentage
  const improvementPercentage =
    ((enhancedContrastRatio - originalContrastRatio) / originalContrastRatio) *
    100;
  logger.info(`Contrast improvement: ${improvementPercentage.toFixed(2)}%`);

  logger.info("-----------------------------------");
}

/**
 * Main function to test contrast improvement for all dark themes
 */
function main(): void {
  logger.info("Testing contrast improvement for dark themes");
  logger.info("-----------------------------------");

  // Test color themes
  testThemeContrast("Ruby Red", "color");
  testThemeContrast("Emerald Green", "color");
  testThemeContrast("Sapphire Blue", "color");

  // Test vivid themes
  testThemeContrast("Neon Lights", "vivid");
  testThemeContrast("Synthwave", "vivid");
  testThemeContrast("Cyberpunk", "vivid");

  // Test pastel themes
  testThemeContrast("Pastel Dark", "pastel");
  testThemeContrast("Panda Syntax", "pastel");

  logger.info("Contrast testing complete");
}

// Run the main function
main();
