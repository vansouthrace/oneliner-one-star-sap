import { mkdirSync, writeFileSync } from 'node:fs';

const ENTRY = "One star. My human waters me when the leaves droop, like a fire alarm that only works after the house burns down. Would not photosynthesize here again. The succulent next door gets misted daily.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', ENTRY);
