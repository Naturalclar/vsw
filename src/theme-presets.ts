/**
 * Theme presets
 */
export interface ThemePreset {
  name: string;
  type: 'dark' | 'light';
  description: string;
}

/**
 * Pastel theme presets
 */
export const pastelThemes: ThemePreset[] = [
  {
    name: 'Pastel Light',
    type: 'light',
    description: 'A light theme with soft pastel colors',
  },
  {
    name: 'Pastel Dark',
    type: 'dark',
    description: 'A dark theme with soft pastel colors',
  },
  {
    name: 'Panda Syntax',
    type: 'dark',
    description: 'A superminimal, dark syntax theme with pastel colors',
  },
  {
    name: 'Fairy Floss',
    type: 'dark',
    description: 'A pastel-colored theme with a magical feel',
  },
  {
    name: 'Rainglow - Piggy Light',
    type: 'light',
    description: 'A light pastel theme with pink accents',
  },
  {
    name: 'Rainglow - Lavender Light',
    type: 'light',
    description: 'A light pastel theme with lavender accents',
  },
  {
    name: 'Rainglow - Tonic',
    type: 'dark',
    description: 'A dark theme with pastel green and blue accents',
  },
  {
    name: 'Horizon',
    type: 'dark',
    description: 'A beautifully warm dark theme with pastel colors',
  },
  {
    name: 'Ayu Light',
    type: 'light',
    description: 'A simple light theme with soft pastel colors',
  },
  {
    name: 'Winter is Coming (Light)',
    type: 'light',
    description: 'A light theme with soft blue pastel colors',
  },
];

/**
 * Get pastel themes by type
 */
export const getPastelThemesByType = (type: 'dark' | 'light'): ThemePreset[] => {
  return pastelThemes.filter((theme) => theme.type === type);
};

/**
 * Get all pastel themes
 */
export const getAllPastelThemes = (): ThemePreset[] => {
  return pastelThemes;
};

/**
 * Get pastel theme by name
 */
export const getPastelThemeByName = (name: string): ThemePreset | undefined => {
  return pastelThemes.find((theme) => theme.name === name);
};
