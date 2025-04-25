# Plan to Improve Contrast for Subtexts in Dark Mode

## Problem Statement

In most dark themes in the VSW extension, subtexts (primarily comments) have low contrast with the background, making them difficult to read. This affects all dark themes across the different theme categories (color themes, vivid themes, and pastel themes).

## Current Contrast Issues

Here are some examples of the current low-contrast combinations:

### Color Themes

- Ruby Red: comments use `#664444` on a `#1a0000` background
- Emerald Green: comments use `#446644` on a `#001a00` background
- Sapphire Blue: comments use `#444466` on a `#00001a` background

### Vivid Themes

- Neon Lights: comments use `#4d4d7a` on a `#0f0f1b` background
- Synthwave: comments use `#6d5a7d` on a `#241b2f` background
- Cyberpunk: comments use `#495495` on a `#120b20` background

### Pastel Themes

- Pastel Dark: comments use `#7f848e` on a `#282c34` background
- Panda Syntax: comments use `#676b79` on a `#292a2b` background
- Rainglow Tonic: comments use `#777777` on a `#2a2a2a` background

## Solution Approach

### 1. Create a Contrast Utility Function

Create a utility function that can calculate and adjust colors to ensure they meet a minimum contrast ratio with the background. This function will be used to generate higher contrast colors for comments in dark themes.

```typescript
// Example utility function
function ensureMinimumContrast(
  foreground: string,
  background: string,
  minContrastRatio: number = 4.5
): string {
  // Calculate contrast ratio between foreground and background
  // If below minimum, adjust foreground color to meet the minimum contrast ratio
  // Return the adjusted foreground color
}
```

### 2. Update Theme Colors

Modify the comment colors in all dark themes to ensure they have sufficient contrast with their respective backgrounds. This will involve:

- Updating the comment colors in `color-themes.ts`
- Updating the comment colors in `vivid-themes.ts`
- Updating the comment colors in `theme-colors.ts`

### 3. Implementation Steps

1. Create a new utility file `src/utils/color-utils.ts` with contrast calculation and adjustment functions
2. Update the comment colors in each theme file using the utility function
3. Test the changes to ensure they provide better readability

### 4. Contrast Guidelines

For text readability, we'll aim for the following contrast ratios:

- Normal text: At least 4.5:1 contrast ratio (WCAG AA standard)
- Large text: At least 3:1 contrast ratio

Since comments are typically the same size as normal code, we'll aim for at least a 4.5:1 contrast ratio.

## Expected Outcome

After implementing these changes, subtexts (comments) in dark themes will be more readable due to increased contrast with the background. This will improve the overall user experience, especially for users who rely on comments for code understanding or who have visual impairments.
