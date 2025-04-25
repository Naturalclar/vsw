/**
 * Utility functions for color manipulation and contrast calculation
 */

/**
 * Parse a hex color string to RGB values
 */
export function hexToRgb(hex: string): { r: number; g: number; b: number } {
  // Remove # if present
  const hexValue = hex.replace(/^#/, '');

  // Parse hex values
  let r: number;
  let g: number;
  let b: number;

  if (hexValue.length === 3) {
    // Short notation (#RGB)
    r = parseInt(hexValue.charAt(0) + hexValue.charAt(0), 16);
    g = parseInt(hexValue.charAt(1) + hexValue.charAt(1), 16);
    b = parseInt(hexValue.charAt(2) + hexValue.charAt(2), 16);
  } else {
    // Full notation (#RRGGBB)
    r = parseInt(hexValue.substring(0, 2), 16);
    g = parseInt(hexValue.substring(2, 4), 16);
    b = parseInt(hexValue.substring(4, 6), 16);
  }

  return { r, g, b };
}

/**
 * Convert RGB values to hex color string
 */
export function rgbToHex(r: number, g: number, b: number): string {
  // Ensure values are within valid range
  const rClamped = Math.max(0, Math.min(255, Math.round(r)));
  const gClamped = Math.max(0, Math.min(255, Math.round(g)));
  const bClamped = Math.max(0, Math.min(255, Math.round(b)));

  // Convert to hex
  return `#${rClamped.toString(16).padStart(2, '0')}${gClamped
    .toString(16)
    .padStart(2, '0')}${bClamped.toString(16).padStart(2, '0')}`;
}

/**
 * Calculate relative luminance of a color
 * Based on WCAG 2.0 formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html
 */
export function getLuminance(color: string): number {
  const { r, g, b } = hexToRgb(color);

  // Convert RGB to relative luminance
  const rsrgb = r / 255;
  const gsrgb = g / 255;
  const bsrgb = b / 255;

  const r1 = rsrgb <= 0.03928 ? rsrgb / 12.92 : ((rsrgb + 0.055) / 1.055) ** 2.4;
  const g1 = gsrgb <= 0.03928 ? gsrgb / 12.92 : ((gsrgb + 0.055) / 1.055) ** 2.4;
  const b1 = bsrgb <= 0.03928 ? bsrgb / 12.92 : ((bsrgb + 0.055) / 1.055) ** 2.4;

  return 0.2126 * r1 + 0.7152 * g1 + 0.0722 * b1;
}

/**
 * Calculate contrast ratio between two colors
 * Based on WCAG 2.0 formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html
 */
export function getContrastRatio(foreground: string, background: string): number {
  const foregroundLuminance = getLuminance(foreground);
  const backgroundLuminance = getLuminance(background);

  // Calculate contrast ratio
  const lighter = Math.max(foregroundLuminance, backgroundLuminance);
  const darker = Math.min(foregroundLuminance, backgroundLuminance);

  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Lighten a color by a specified percentage
 */
export function lightenColor(color: string, percent: number): string {
  const { r, g, b } = hexToRgb(color);

  // Lighten by percentage
  const factor = 1 + percent / 100;
  const newR = r * factor;
  const newG = g * factor;
  const newB = b * factor;

  return rgbToHex(newR, newG, newB);
}

/**
 * Darken a color by a specified percentage
 */
export function darkenColor(color: string, percent: number): string {
  const { r, g, b } = hexToRgb(color);

  // Darken by percentage
  const factor = 1 - percent / 100;
  const newR = r * factor;
  const newG = g * factor;
  const newB = b * factor;

  return rgbToHex(newR, newG, newB);
}

/**
 * Adjust a color to ensure it meets a minimum contrast ratio with a background color
 * For dark themes, this will typically lighten the foreground color
 */
export function ensureMinimumContrast(
  foreground: string,
  background: string,
  minContrastRatio = 4.5
): string {
  // Get initial contrast ratio
  let contrastRatio = getContrastRatio(foreground, background);

  // If contrast is already sufficient, return the original color
  if (contrastRatio >= minContrastRatio) {
    return foreground;
  }

  // Determine if we need to lighten or darken the foreground
  const foregroundLuminance = getLuminance(foreground);
  const backgroundLuminance = getLuminance(background);

  // For dark backgrounds, we typically need to lighten the foreground
  // For light backgrounds, we typically need to darken the foreground
  const shouldLighten = backgroundLuminance < foregroundLuminance;

  // Adjust color incrementally until we reach the minimum contrast ratio
  let adjustedColor = foreground;
  const adjustmentStep = 5; // Start with 5% adjustment
  let maxIterations = 20; // Prevent infinite loops

  while (contrastRatio < minContrastRatio && maxIterations > 0) {
    if (shouldLighten) {
      adjustedColor = lightenColor(adjustedColor, adjustmentStep);
    } else {
      adjustedColor = darkenColor(adjustedColor, adjustmentStep);
    }

    contrastRatio = getContrastRatio(adjustedColor, background);
    maxIterations--;
  }

  return adjustedColor;
}

/**
 * Adjust comment colors for a dark theme to ensure they have sufficient contrast
 */
export function adjustDarkThemeCommentColor(commentColor: string, backgroundColor: string): string {
  // For dark themes, we want a higher minimum contrast for comments
  // WCAG AA requires 4.5:1 for normal text, but we'll aim for 5:1 for better readability
  return ensureMinimumContrast(commentColor, backgroundColor, 5.0);
}
