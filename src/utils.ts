/**
 * Returns the content based on the environment variable.
 *
 * @returns {'draft' | 'published'} - 'draft' if preview mode is enabled, otherwise 'published'.
 */
export default function getVersion(): "draft" | "published" {
  return import.meta.env.VITE_STORYBLOK_IS_PREVIEW === "true"
    ? "draft"
    : "published";
}
