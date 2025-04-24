#!/usr/bin/env node

import { createCLI } from './cli';

/**
 * Main function
 */
async function main(): Promise<void> {
  const program = createCLI();

  // Add default action when no command is provided
  if (process.argv.length <= 2 || process.argv.includes('-h') || process.argv.includes('--help')) {
    program.help();
    return;
  }

  await program.parseAsync(process.argv);
}

// Execute main function
main().catch((error) => {
  console.error('Error:', error);
  process.exit(1);
});
