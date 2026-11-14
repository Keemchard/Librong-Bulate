export const OL_BASE = "https://openlibrary.org";
export const OL_COVERS = "https://covers.openlibrary.org/b/id";

export function coverUrl(coverId: number | null, size: "S" | "M" | "L" = "M") {
  if (!coverId) return null;
  return `${OL_COVERS}/${coverId}-${size}.jpg`;
}

export const SUBJECTS = [
  { slug: "fiction", label: "Fiction" },
  { slug: "science_fiction", label: "Science Fiction" },
  { slug: "fantasy", label: "Fantasy" },
  { slug: "mystery", label: "Mystery" },
  { slug: "romance", label: "Romance" },
  { slug: "horror", label: "Horror" },
  { slug: "thriller", label: "Thriller" },
  { slug: "history", label: "History" },
  { slug: "biography", label: "Biography" },
  { slug: "science", label: "Science" },
  { slug: "philosophy", label: "Philosophy" },
  { slug: "poetry", label: "Poetry" },
  { slug: "young_adult", label: "Young Adult" },
  { slug: "children", label: "Children" },
  { slug: "psychology", label: "Psychology" },
  { slug: "art", label: "Art" },
  { slug: "music", label: "Music" },
  { slug: "cooking", label: "Cooking" },
  { slug: "travel", label: "Travel" },
  { slug: "religion", label: "Religion" },
];
